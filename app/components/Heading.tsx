"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold text-main-color">{title}</div>
      <div className="font-light text-green-middle">{subtitle}</div>
    </div>
  );
};

export default Heading;
