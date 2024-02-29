import FoundBikeDetail from "./components/FoundBikeDetail/FoundBikeDetail";
import ImpoundedBikeDetail from "./components/ImpoundedBikeDetail/ImpoundedBikeDetail";
import OwnedBikeDetail from "./components/OwnedBikeDetail/OwnedBikeDetail";
import StolenBikeDetail from "./components/StolenBikeDetail/StolenBikeDetail";
import { useBike } from "./hooks/useBike";

const BikePage = async ({ params }: { params: { id: string } }) => {
  const bike = await useBike(params.id);

  const { status } = bike;
  let Content: JSX.Element;

  switch (status) {
    case "stolen":
      Content = <StolenBikeDetail bike={bike} />;
      break;
    case "found":
      Content = <FoundBikeDetail bike={bike} />;
      break;
    case "impounded":
      Content = <ImpoundedBikeDetail bike={bike} />;
      break;
    case "with owner":
      Content = <OwnedBikeDetail bike={bike} />;
      break;
  }

  return <main>{Content}</main>;
};

export default BikePage;
