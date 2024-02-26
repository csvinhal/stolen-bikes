"use client";

import Image from "next/image";
import Link from "next/link";

import { type BikeStatus } from "@/app/types/search";
import bikePlaceholder from "../../../public/bike_photo_placeholder.svg";
import Attributes from "../Attributes/Attributes";
import BikeDetailSerial from "./BikeDetailSerial/BikeDetailSerial";
import BikeDetailStatus from "./BikeDetailStatus/BikeDetailStatus";

interface Props {
  id: number;
  thumb?: string;
  title: string;
  serial: string;
  primaryColors?: string;
  status: BikeStatus;
  dateStolen?: string;
  stolenLocation: string;
  locationFound: string;
  description: string;
}

const BikeDetail = ({
  id,
  thumb,
  title,
  serial,
  primaryColors,
  status,
  dateStolen,
  stolenLocation,
  locationFound,
  description,
}: Props) => {
  const bikeDetail = `/bike/${id}`;

  return (
    <div
      key={id}
      className="flex flex-auto gap-6 rounded-md shadow-sm p-6 mb-10 border border-slate-100"
    >
      <Link
        className="shrink-0 bg-slate-300 w-24 h-24 self-center"
        href={bikeDetail}
      >
        <Image
          src={thumb ?? bikePlaceholder}
          height={96}
          width={96}
          alt="Bike image"
        />
      </Link>
      <div className="flex-1 flex-col gap-2">
        <h5>
          <Link href={bikeDetail} className="text-blue-600">
            {title}
          </Link>
        </h5>
        <div className="flex flex-col md:flex-row">
          <Attributes>
            <BikeDetailSerial serial={serial} status={status} />
            <Attributes.Item
              label="Primary Colors"
              description={primaryColors ?? ""}
            />
          </Attributes>

          {["stolen", "found", "impounded"].includes(status) && (
            <Attributes>
              <BikeDetailStatus status={status} dateStolen={dateStolen} />

              <Attributes.Item
                label="Location"
                description={stolenLocation ?? locationFound}
              />
            </Attributes>
          )}
        </div>

        {description && (
          <>
            <hr className="my-2" />
            <p>{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BikeDetail;
