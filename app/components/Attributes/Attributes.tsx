import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Attributes = ({ children }: Props) => {
  return <ul className="columns-1 md:columns-2">{children}</ul>;
};

interface ItemProps {
  className?: string;
  labelColor?: string;
  label: string;
  description: string | number;
}

Attributes.Item = ({ className, labelColor, label, description }: ItemProps) => {
  return (
    <li className={className}>
      <strong className={labelColor}>{label}:</strong> {description}
    </li>
  );
};

export default Attributes;
