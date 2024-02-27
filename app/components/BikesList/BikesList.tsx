"use client";

import { useSearch } from "@/app/hooks/useSearch";
import BikeDetail from "../BikeDetail/BikeDetail";

const BikesList = () => {
  const { bikes, isLoading, isError } = useSearch({});
  return (
    <div className="mt-4">
      {isLoading && <p>Loading ...</p>}
      {!isLoading && isError && <p>Ooops, something went wrong</p>}
      {!isLoading && bikes?.length === 0 && <p>No results</p>}
      {!isLoading &&
        bikes &&
        bikes.length > 0 &&
        bikes?.map((bike) => <BikeDetail key={bike.id} bike={bike} />)}
    </div>
  );
};

export default BikesList;
