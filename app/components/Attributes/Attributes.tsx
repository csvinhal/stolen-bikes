import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Attributes = ({ children }: Props) => {
  return <ul className="md:basis-[48%] lg:basis-[40%]">{children}</ul>;
};

interface ItemProps {
  className?: string;
  labelColor?: string;
  label: string;
  description: string;
}

Attributes.Item = ({ className, labelColor, label, description }: ItemProps) => {
  return (
    <li className={className}>
      <strong className={labelColor}>{label}:</strong> {description}
    </li>
  );
};

export default Attributes;
