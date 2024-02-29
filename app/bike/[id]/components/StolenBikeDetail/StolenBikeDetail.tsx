import { type BikeDetail } from "../../types/bike-detail";
import BikeAttributes from "../BikeAttributes/BikeAttributes";
import BikeImage from "../BikeImage/BikeImage";
import MoreDetails from "../MoreDetails/MoreDetails";

interface Props {
  bike: BikeDetail;
}

const StolenBikeDetail = ({ bike }: Props) => {
  const {
    status,
    manufacturer,
    model,
    serial,
    title,
    dateStolen,
    frameSize,
    img,
    primaryColors,
    stolenAt,
    stolenCoordinates,
    stolenLocation,
    year,
    frameMaterial,
  } = bike;
  return (
    <>
      <h1>
        <strong className="text-red-500">Stolen</strong> {title}
      </h1>
      <p className="mb-4">
        <strong>Stolen</strong> {dateStolen} <strong>from</strong>{" "}
        {stolenLocation}
      </p>

      <BikeImage src={img} />

      <BikeAttributes
        status={status}
        serial={serial}
        manufacturer={manufacturer}
        model={model}
        year={year}
        primaryColors={primaryColors}
        frameSize={frameSize}
        frameMaterial={frameMaterial}
      />

      <MoreDetails
        title="THEFT DETAILS"
        coordinates={stolenCoordinates}
        attributes={[
          { label: "Location: ", value: stolenLocation as string },
          { label: "Stolen at: ", value: stolenAt as string },
        ]}
      />
    </>
  );
};

export default StolenBikeDetail;
