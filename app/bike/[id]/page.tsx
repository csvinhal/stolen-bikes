import Image from "next/image";
import Map from "./components/Map/Map";
import { useBike } from "./hooks/useBike";

const BikePage = async ({ params }: { params: { id: string } }) => {
  const bike = await useBike(params.id);
  return (
    <main>
      <h1>
        <strong className="text-red-500">Stolen</strong> {bike.title}
      </h1>
      <p className="mb-4">
        <strong>Stolen</strong> {bike.dateStolen} from {bike.stolenLocation}
      </p>

      {bike.img && (
        <Image
          className="mb-4"
          src={bike.img}
          width={500}
          height={500}
          alt="Picture of the bike"
          priority
        />
      )}

      <ul className="columns-2">
        <li>
          <strong>Serial: </strong>
          {bike.serial}
        </li>
        <li>
          <strong>Manufacturer: </strong>
          {bike.manufacturer}
        </li>
        <li>
          <strong>Model: </strong>
          {bike.model}
        </li>
        <li>
          <strong>Year: </strong>
          {bike.year}
        </li>
        <li>
          <strong>Primary colors:</strong> Black
        </li>
      </ul>
      <h2 className="my-4">THEFT DETAILS</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {bike.stolenCoordinates && bike.stolenCoordinates.length > 0 && (
          <Map
            coordinate={{
              lat: bike.stolenCoordinates[0],
              lng: bike.stolenCoordinates[1],
            }}
          />
        )}
        <ul className="md:self-center">
          <li>
            <strong>Location: </strong>
            {bike.stolenLocation}
          </li>
          <li>
            <strong>Stolen at: </strong>
            {bike.stolenAt}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default BikePage;
