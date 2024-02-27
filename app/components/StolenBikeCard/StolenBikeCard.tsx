import { useGetHrefById } from "@/app/hooks/useGetHrefById";
import { type BikeStolenOrImpounded } from "@/app/types/search";
import Attributes from "../Attributes/Attributes";
import BikeCard from "../BikeCard/BikeCard";
import BikeDetailSerial from "../BikeDetail/BikeDetailSerial/BikeDetailSerial";
import BikeDetailStatus from "../BikeDetail/BikeDetailStatus/BikeDetailStatus";

interface Props {
  bike: BikeStolenOrImpounded;
}
const StolenBikeCard = ({ bike }: Props) => {
  const {
    id,
    thumb,
    title,
    description,
    serial,
    status,
    primaryColors,
    dateStolen,
    stolenLocation,
  } = bike;
  const href = useGetHrefById(id);
  return (
    <BikeCard>
      <BikeCard.Image href={href} thumb={thumb} />
      <BikeCard.Content href={href} description={description} title={title}>
        <Attributes>
          <BikeDetailSerial serial={serial} status={status} />
          {primaryColors && (
            <Attributes.Item
              label="Primary Colors"
              description={primaryColors}
            />
          )}

          <BikeDetailStatus status={status} dateStolen={dateStolen} />

          <Attributes.Item
            label={status === "stolen" ? "Stolen" : "Impounded"}
            labelClassName="uppercase text-red-500"
            description={dateStolen}
          />

          <Attributes.Item label="Location" description={stolenLocation} />
        </Attributes>
      </BikeCard.Content>
    </BikeCard>
  );
};

export default StolenBikeCard;
