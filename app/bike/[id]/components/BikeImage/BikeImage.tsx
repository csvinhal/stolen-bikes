import Image from "next/image";

interface Props {
  src?: string;
}

const BikeImage = ({ src }: Props) => {
  if (!src) return;
  return (
    <Image
      className="mb-4"
      src={src}
      width={500}
      height={500}
      alt="Picture of the bike"
      priority
    />
  );
};

export default BikeImage;
