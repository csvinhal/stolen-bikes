import { useGetHrefById } from "@/app/hooks/useGetHrefById";
import { type BikeFound } from "@/app/types/search";
import Attributes from "../Attributes/Attributes";
import BikeCard from "../BikeCard/BikeCard";
import BikeDetailSerial from "../BikeDetail/BikeDetailSerial/BikeDetailSerial";

interface Props {
  bike: BikeFound;
}

const FoundBikeCard = ({ bike }: Props) => {
  const {
    id,
    serial,
    status,
    title,
    description,
    locationFound,
    primaryColors,
    thumb,
  } = bike;
  const href = useGetHrefById(id);
  return (
    <BikeCard>
      <BikeCard.Image href={href} thumb={thumb} />
      <BikeCard.Content href={href} description={description} title={title}>
        <Attributes>
          <BikeDetailSerial serial={serial} status={status} />
          <Attributes.Item
            label="Primary Colors"
            description={primaryColors ?? ""}
          />

          <Attributes.Item
            label="Found"
            labelColor="uppercase text-green-500"
            description=""
          />

          <Attributes.Item label="Location" description={locationFound} />
        </Attributes>
      </BikeCard.Content>
    </BikeCard>
  );
};

export default FoundBikeCard;
