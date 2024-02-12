import BikesList from "./components/BikesList/BikesList";
import Filter from "./components/Filter/Filter";

export default function Home() {
  return (
    <main>
      <Filter />
      <BikesList />
    </main>
  );
}
