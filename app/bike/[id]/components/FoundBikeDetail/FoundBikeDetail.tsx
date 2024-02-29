import { type BikeDetail } from "../../types/bike-detail";
import BikeAttributes from "../BikeAttributes/BikeAttributes";
import BikeImage from "../BikeImage/BikeImage";

interface Props {
  bike: BikeDetail;
}

const FoundBikeDetail = ({ bike }: Props) => {
  const {
    status,
    manufacturer,
    model,
    serial,
    title,
    frameSize,
    img,
    primaryColors,
    locationFound,
    year,
    description,
    frameMaterial,
  } = bike;
  return (
    <>
      <h1>
        <strong className="text-green-500">Found</strong> {title}
      </h1>
      <p className="text-orange-300">
        <strong>Looking for the correct owner of this bike!</strong>
      </p>
      <p className="mb-4">
        <strong>Found in</strong> {locationFound}
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

      <h2 className="my-4">THIS IS AN ABANDONED BIKE THAT WAS IMPOUNDED</h2>
      {description && <p className="mb-2">{description}</p>}
      <p>
        <strong>Location:</strong> {locationFound}
      </p>
    </>
  );
};

export default FoundBikeDetail;
