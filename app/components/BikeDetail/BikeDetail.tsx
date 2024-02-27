"use client";

import { type Bike } from "@/app/types/search";
import FoundBikeCard from "../FoundBikeCard/FoundBikeCard";
import OwnedBikeCard from "../OwnedBikeCard/OwnedBikeCard";
import StolenBikeCard from "../StolenBikeCard/StolenBikeCard";

interface Props {
  bike: Bike;
}

const BikeDetail = ({ bike }: Props) => {
  const { status } = bike;
  let content = <></>;

  switch (status) {
    case "impounded":
    case "stolen":
      content = <StolenBikeCard bike={bike} />;
      break;
    case "found":
      content = <FoundBikeCard bike={bike} />;
      break;
    case "with owner":
      content = <OwnedBikeCard bike={bike} />;
      break;
  }
  return content;
};

export default BikeDetail;
