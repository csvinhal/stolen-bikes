import { type BikeDetail } from "../../types/bike-detail";
import BikeAttributes from "../BikeAttributes/BikeAttributes";
import BikeImage from "../BikeImage/BikeImage";

interface Props {
  bike: BikeDetail;
}

const OwnedBikeDetail = ({ bike }: Props) => {
  const {
    status,
    manufacturer,
    model,
    serial,
    title,
    frameSize,
    img,
    primaryColors,
    year,
    description,
    frameMaterial,
  } = bike;
  return (
    <>
      <h1 className="mb-4">{title}</h1>

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

      {description && (
        <>
          <h2 className="my-4">DISTINGUISHING FEATURES</h2>
          <p>{description}</p>
        </>
      )}
    </>
  );
};

export default OwnedBikeDetail;
