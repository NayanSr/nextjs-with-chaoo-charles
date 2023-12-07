import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvaterProps {
  src?: string | null | undefined;
}

export const Avater: React.FC<AvaterProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avater"
        height="30"
        width="30"
        className="rounded-full"
      />
    );
  }
  return <FaUserCircle size={24} />;
};
