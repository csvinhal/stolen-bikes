import { BikeStatus } from "@/app/types/search";
import Attributes from "../../Attributes/Attributes";
import clsx from "clsx";
import { useBikeDetailSerial } from "./hooks/useBikeDetailSerial";

interface Props {
  serial: string;
  status: BikeStatus;
}
const BikeDetailSerial = (props: Props) => {
  const { description, isHidden } = useBikeDetailSerial(props);

  return (
    <Attributes.Item
      className={clsx({ "text-gray-300": isHidden })}
      label="Serial"
      description={description}
    />
  );
};

export default BikeDetailSerial;
