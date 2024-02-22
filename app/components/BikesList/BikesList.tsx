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
        bikes?.map(
          ({
            id,
            dateStolen,
            description,
            title,
            locationFound,
            stolenLocation,
            primaryColors,
            serial,
            status,
            thumb,
          }) => {
            return (
              <BikeDetail
                key={id}
                id={id}
                dateStolen={dateStolen}
                description={description}
                title={title}
                locationFound={locationFound}
                stolenLocation={stolenLocation}
                primaryColors={primaryColors}
                serial={serial}
                status={status}
                thumb={thumb}
              />
            );
          }
        )}
    </div>
  );
};

export default BikesList;
