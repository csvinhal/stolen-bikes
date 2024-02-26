"use client";
import { useRef } from "react";
import { useLoadMap } from "./hooks/useLoadMap";

interface Props {
  coordinate: google.maps.LatLngLiteral;
}

const Map = ({ coordinate }: Props) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useLoadMap(mapContainerRef, coordinate);
  return (
    <>
      <div className="h-96 md:h-[576px] md:flex-1 md:max-w-[576px]"  ref={mapContainerRef} />
    </>
  );
};

export default Map;
