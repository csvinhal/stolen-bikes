import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center mb-10">
      <Image
        className="h-min"
        alt="Logo"
        src="berliner_polizei.svg"
        height={80}
        width={80}
      />
      <div className="pl-10">
        <h1 className="font-extrabold">Police Department of Berlin</h1>
        <h2 className="font-bold">Stolen Bikes</h2>
      </div>
    </div>
  );
};

export default Header;
