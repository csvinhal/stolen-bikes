import { type BikeStatus } from "@/app/types/search";

interface Props {
  serial: string;
  status: BikeStatus;
}

const isBikeStatusHidden = (serial: BikeStatus) => {
  return serial.toLocaleLowerCase() === "hidden";
};

const getDescriptionBySerialAndStatus = ({ serial, status }: Props): string => {
  const isHidden = isBikeStatusHidden(status);

  if (isHidden) {
    switch (status) {
      case "found":
        return `Hidden because bike is found`;
      case "impounded":
        return `Hidden because bike is impounded`;
    }
  }

  return serial;
};

export const useBikeDetailSerial = ({ serial, status }: Props) => {
  const isHidden = isBikeStatusHidden(status);

  return {
    isHidden,
    description: getDescriptionBySerialAndStatus({ serial, status }),
  };
};
