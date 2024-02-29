import Map from "../Map/Map";

interface Props {
  title: string;
  coordinates?: number[];
  attributes?: { label: string; value: string }[];
}

const MoreDetails = ({ title, coordinates, attributes }: Props) => {
  return (
    <>
      <h2 className="my-4">{title}</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {coordinates && coordinates.length > 0 && (
          <Map
            coordinate={{
              lat: coordinates[0],
              lng: coordinates[1],
            }}
          />
        )}
        {attributes && (
          <ul className="md:self-center">
            {attributes.map(({ label, value }) => (
              <li key={label}>
                <strong>{label}</strong>
                {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MoreDetails;
