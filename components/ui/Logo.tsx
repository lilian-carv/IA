/* eslint-disable @next/next/no-img-element */
type Props = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 40, className = "" }: Props) {
  return (
    <img
      src="/numeratti-logo.png"
      alt="Numeratti"
      height={size}
      style={{ height: size, width: "auto" }}
      className={`block ${className}`}
    />
  );
}
