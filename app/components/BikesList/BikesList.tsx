"use client";

import { useSearch } from "@/app/hooks/useSearch";
import Image from "next/image";
import Link from "next/link";

const BikesList = () => {
  const { bikes, isLoading, isError } = useSearch({});
  return (
    <div className="mt-4">
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Ooops, something went wrong</p>}
      {bikes?.length === 0 && <p>No results</p>}
      {!isLoading &&
        bikes &&
        bikes.length > 0 &&
        bikes?.map((bike) => (
          <div
            key={bike.id}
            className="flex flex-auto gap-6 rounded-md shadow-sm p-6 mb-10 border border-white"
          >
            <Link
              className="shrink-0 bg-slate-300 w-24 h-24 self-center"
              href={"#"}
            >
              <Image
                src={bike.thumb ?? "bike_photo_placeholder.svg"}
                height={96}
                width={96}
                alt="Bike image"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-blue-600">
                <span>Title:</span>
                <span>{bike.title}</span>
              </Link>
              <div className="md:grid md:grid-cols-2 auto-rows-auto">
                <p>
                  <span className="font-bold">Serial:</span>{" "}
                  <span>{bike.serial}</span>
                </p>
                <p>
                  <span className="font-bold">Stolen:</span>{" "}
                  <span>{new Date(bike.dateStolen).toLocaleDateString()}</span>
                </p>
                <p>
                  <span className="font-bold">Primary Colors:</span>{" "}
                  <span>{bike.primaryColors}</span>
                </p>
                <p>
                  <span className="font-bold">Stolen Location:</span>{" "}
                  <span>{bike.stolenLocation}</span>
                </p>
              </div>

              {bike.description && (
                <>
                  <hr className="my-2" />
                  <p>{bike.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BikesList;
