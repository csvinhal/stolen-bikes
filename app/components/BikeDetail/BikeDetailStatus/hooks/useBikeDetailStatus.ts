import { BikeStatus } from "@/app/types/search";

const getLabelByStatus = (status: BikeStatus) => {
  switch (status) {
    case "stolen":
      return "Stolen";
    case "impounded":
      return "Impounded";
    case "found":
      return "Found";
    default:
      return "";
  }
};

export const useBikeDetailStatus = (status: BikeStatus) => {
  const isFound = "found" === status;
  const isStolenOrImpounded = ["stolen", "impounded"].includes(status);

  const label = getLabelByStatus(status);

  return {
    isFound,
    isStolenOrImpounded,
    label,
  };
};
