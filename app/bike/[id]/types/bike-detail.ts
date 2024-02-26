import { type BikeStatus } from "@/app/types/search";

export interface BikeDetail {
  id: number;
  title: string;
  serial: string;
  status: BikeStatus;
  stolenCoordinates?: number[];
  dateStolen?: string;
  stolenAt?: string;
  stolenLocation?: string;
  locationFound?: string;
  manufacturer: string;
  model: string;
  year: number;
  img?: string;
}