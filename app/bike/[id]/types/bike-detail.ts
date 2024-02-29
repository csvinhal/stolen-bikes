import { type BikeStatus } from "@/app/types/search";

export interface BikeDetail {
  id: number;
  title: string;
  description?: string;
  serial: string;
  status: BikeStatus;
  stolenCoordinates?: number[];
  dateStolen?: string;
  stolenAt?: string;
  stolenLocation?: string;
  locationFound?: string;
  manufacturer: string;
  model: string;
  primaryColors?: string;
  frameSize?: string;
  year?: number;
  img?: string;
  frameMaterial?: string;
}
