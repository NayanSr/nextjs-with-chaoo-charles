import { Montserrat_Alternates } from "next/font/google";
import Link from "next/link";
import Container from "../Container";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-neutral-300 z-30 shadow-sm">
      <div className="py-4 border-b-[1px] border-neutral-100">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <Link
              href="/"
              className={`${montserratAlternates.className}  text-2xl`}
              style={{ fontWeight: "500" }}
            >
              E-Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CartCounter</div>
              <div>Usermanu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
