import { useGetHrefById } from "@/app/hooks/useGetHrefById";
import { type BikeOwned } from "@/app/types/search";
import Attributes from "../Attributes/Attributes";
import BikeCard from "../BikeCard/BikeCard";
import BikeDetailSerial from "../BikeDetail/BikeDetailSerial/BikeDetailSerial";

interface Props {
  bike: BikeOwned;
}

const OwnedBikeCard = ({ bike }: Props) => {
  const { id, serial, status, title, description, primaryColors, thumb } = bike;
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
        </Attributes>
      </BikeCard.Content>
    </BikeCard>
  );
};

export default OwnedBikeCard;
