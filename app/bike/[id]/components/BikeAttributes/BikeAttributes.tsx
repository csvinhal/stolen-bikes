import Attributes from "@/app/components/Attributes/Attributes";
import BikeDetailSerial from "@/app/components/BikeDetail/BikeDetailSerial/BikeDetailSerial";
import { type BikeStatus } from "@/app/types/search";

interface Props {
  status: BikeStatus;
  serial: string;
  manufacturer: string;
  model: string;
  year?: number;
  primaryColors?: string;
  frameSize?: string;
  frameMaterial?: string;
}

const BikeAttributes = ({
  status,
  serial,
  manufacturer,
  model,
  year,
  primaryColors,
  frameSize,
  frameMaterial,
}: Props) => {
  return (
    <Attributes>
      <BikeDetailSerial serial={serial} status={status} />
      <Attributes.Item label="Manufacturer" description={manufacturer} />
      <Attributes.Item label="Model" description={model} />
      {year && <Attributes.Item label="Year" description={year} />}
      {primaryColors && (
        <Attributes.Item label="Primary colors" description={primaryColors} />
      )}
      {frameMaterial && (
        <Attributes.Item
          descriptionClassName="capitalize"
          label="Frame material"
          description={frameMaterial}
        />
      )}
      {frameSize && (
        <Attributes.Item
          descriptionClassName="uppercase"
          label="Frame size"
          description={frameSize}
        />
      )}
    </Attributes>
  );
};

export default BikeAttributes;
