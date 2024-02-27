export type BikeStatus = "stolen" | "found" | "impounded" | "with owner";

export type BikeBase = {
  id: number;
  title: string;
  serial: string;
  thumb?: string;
  description?: string;
  primaryColors?: string;
};

export type BikeFound = BikeBase & {
  status: "found";
  locationFound: string;
};

export type BikeOwned = BikeBase & {
  status: "with owner";
};

export type BikeStolenOrImpounded = BikeBase & {
  status: "stolen" | "impounded";
  dateStolen: string;
  stolenLocation: string;
};

export type Bike = BikeFound | BikeOwned | BikeStolenOrImpounded;
