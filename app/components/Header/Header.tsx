import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/berliner_polizei.svg";

const Header = () => {
  return (
    <div className="flex items-center mb-10">
      <Link href="/" aria-label="Go to homepage">
        <Image className="h-min" alt="Logo" src={Logo} height={80} width={80} />
      </Link>
      <div className="pl-10">
        <h1 className="font-extrabold">Police Department of Berlin</h1>
        <h2 className="font-bold">Stolen Bikes</h2>
      </div>
    </div>
  );
};

export default Header;
