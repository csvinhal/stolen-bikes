import useSWR, { Fetcher } from "swr";
import axios from "axios";

interface Bike {
  id: number;
  title: string;
  serial: string;
  dateStolen: number;
  stolenLocation: string;
  thumb?: string;
  description: string;
  primaryColors?: string;
}

interface FetchResponse {
  bikes: Array<Bike>;
}

const fetchIncidents: Fetcher<FetchResponse, string> = (url: string) =>
  axios
    .get<FetchResponse>(`https://bikeindex.org/api/v3/${url}`)
    .then(function (response) {
      const { bikes } = response.data;
      return {
        bikes: bikes.map((bike: any) => ({
          id: bike.id,
          title: bike.title,
          serial: bike.serial,
          dateStolen: bike.date_stolen,
          stolenLocation: bike.stolen_location,
          thumb: bike.thumb,
          description: bike.description,
          primaryColors: bike.frame_colors?.join(", "),
        })),
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
