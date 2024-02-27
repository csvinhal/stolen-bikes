import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import bikePlaceholder from "../../../public/bike_photo_placeholder.svg";
import Attributes from "../Attributes/Attributes";

interface Props {
  children: ReactNode;
}

const BikeCard = ({ children }: Props) => {
  return (
    <div className="flex flex-auto gap-6 rounded-md shadow-sm p-6 mb-10 border border-slate-100">
      {children}
    </div>
  );
};

interface ImageProps {
  href: string;
  thumb?: string;
}

BikeCard.Image = ({ href, thumb }: ImageProps) => {
  return (
    <Link className="shrink-0 bg-slate-300 w-24 h-24 self-center" href={href}>
      <Image
        src={thumb ?? bikePlaceholder}
        height={96}
        width={96}
        alt="Bike thumbnail"
      />
    </Link>
  );
};

interface ContentProps {
  href: string;
  title: string;
  description?: string;
  children: ReactNode;
}

BikeCard.Content = ({ href, title, description, children }: ContentProps) => {
  return (
    <div className="flex-1 flex-col gap-2">
      <h5>
        <Link href={href} className="text-blue-600">
          {title}
        </Link>
      </h5>
      {children}

      {description && (
        <>
          <hr className="my-2" />
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default BikeCard;
