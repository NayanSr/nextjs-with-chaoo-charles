interface HeadingProps {
  title: string;
  center?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ title, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};
