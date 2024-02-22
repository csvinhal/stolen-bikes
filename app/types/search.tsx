export type BikeStatus = "stolen" | "found" | "impounded" | "with owner";

export interface Bike {
  id: number;
  title: string;
  serial: string;
  dateStolen?: string;
  stolenLocation: string;
  status: BikeStatus;
  thumb?: string;
  description: string;
  primaryColors?: string;
  locationFound: string;
}
