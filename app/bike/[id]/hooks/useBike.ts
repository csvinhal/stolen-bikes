import dayjs from "dayjs";
import { type BikeDetail } from "../types/bike-detail";

export const useBike = async (id: string): Promise<BikeDetail> => {
  const response = await fetch(`https://bikeindex.org/api/v3/bikes/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const resAsJson = await response.json();
  const { bike } = resAsJson;

  return {
    id: bike.id,
    serial: bike.serial,
    status: bike.status,
    title: bike.title,
    stolenLocation: bike.stolen_location,
    locationFound: bike.location_found,
    dateStolen: bike.date_stolen
      ? dayjs(bike.date_stolen).format("h:mma Z")
      : undefined,
    stolenAt: bike.date_stolen
      ? dayjs(bike.date_stolen).format("h:mma")
      : undefined,
    manufacturer: bike.manufacturer_name,
    model: bike.frame_model,
    year: bike.year,
    stolenCoordinates: bike.stolen_coordinates,
    img: bike.large_img,
  };
};
