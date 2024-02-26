import axios from "axios";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import useSWR, { Fetcher } from "swr";
import { type Bike } from "../types/search";

dayjs.extend(localizedFormat);

interface FetchResponse {
  bikes: Array<Bike>;
}

const fetchIncidents: Fetcher<FetchResponse, string> = (url: string) =>
  axios.get(`https://bikeindex.org/api/v3/${url}`).then((response) => {
    const { bikes } = response.data;
    return {
      bikes: bikes.map(
        (bike: any): Bike => ({
          id: bike.id,
          title: bike.title,
          serial: bike.serial,
          dateStolen: bike.date_stolen
            ? dayjs(bike.date_stolen).format("LLL")
            : undefined,
          stolenLocation: bike.stolen_location,
          status: bike.status,
          thumb: bike.thumb,
          description: bike.description,
          primaryColors: bike.frame_colors?.join(", "),
          locationFound: bike.location_found,
        })
      ),
    };
  });

interface SearchProps {
  page?: number;
  query?: string;
}

export const useSearch = ({ page = 1, query = "" }: SearchProps) => {
  const { data, error, isLoading, mutate } = useSWR(
    `search/?page=${page}&per_page=10&query=${query}`,
    fetchIncidents
  );

  return {
    bikes: data?.bikes,
    isLoading,
    isError: error,
    mutate,
  };
};
