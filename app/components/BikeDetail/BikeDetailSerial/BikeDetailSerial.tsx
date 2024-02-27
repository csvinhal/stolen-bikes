import { type BikeStatus } from "@/app/types/search";
import clsx from "clsx";
import Attributes from "../../Attributes/Attributes";
import { useBikeDetailSerial } from "./hooks/useBikeDetailSerial";

interface Props {
  serial: string;
  status: BikeStatus;
}
const BikeDetailSerial = ({ serial, status }: Props) => {
  const { description, isHidden, isUnknown } = useBikeDetailSerial({
    serial,
    status,
  });

  return (
    <Attributes.Item
      label="Serial"
      descriptionClassName={clsx({ "text-gray-300": isHidden || isUnknown })}
      description={description}
    />
  );
};

export default BikeDetailSerial;
