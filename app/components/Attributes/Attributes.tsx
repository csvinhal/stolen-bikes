import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Attributes = ({ children }: Props) => {
  return <ul className="columns-1 md:columns-2">{children}</ul>;
};

interface ItemProps {
  className?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  label: string;
  description: string | number;
}

Attributes.Item = ({
  className,
  labelClassName,
  descriptionClassName,
  label,
  description,
}: ItemProps) => {
  return (
    <li className={className}>
      <strong className={labelClassName}>{label}:</strong>{" "}
      <span className={descriptionClassName}>{description}</span>
    </li>
  );
};

export default Attributes;
