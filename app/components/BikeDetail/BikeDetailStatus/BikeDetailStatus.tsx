import { type BikeStatus } from "@/app/types/search";
import clsx from "clsx";
import Attributes from "../../Attributes/Attributes";
import { useBikeDetailStatus } from "./hooks/useBikeDetailStatus";

interface Props {
  status: BikeStatus;
  dateStolen?: string;
}

const BikeDetailStatus = ({ status, dateStolen }: Props) => {
  const { isFound, isStolenOrImpounded, label } = useBikeDetailStatus(status);

  return (
    <Attributes.Item
      label={label}
      labelColor={clsx("uppercase", {
        "text-red-500": isStolenOrImpounded,
        "text-green-500": isFound,
      })}
      description={dateStolen ?? ""}
    />
  );
};

export default BikeDetailStatus;
