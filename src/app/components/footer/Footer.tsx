import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-orange-100 text-sm mt-1">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-0">
          <FooterList>
            <h3 className="mb-1 font-bold">Shop Container</h3>
            <Link href="#" className="ml-4 md:ml-0">
              Phones
            </Link>
            <Link href="#" className="ml-4 md:ml-0">
              Laptops
            </Link>
            <Link href="#" className="ml-4 md:ml-0">
              Desktops
            </Link>
            <Link href="#" className="ml-4 md:ml-0">
              Watches
            </Link>
            <Link href="#" className="ml-4 md:ml-0">
              Monitors
            </Link>
            <Link href="#" className="ml-4 md:ml-0">
              Accessories
            </Link>
          </FooterList>

          <FooterList>
            <h3 className="mb-1 font-bold">Customer Service</h3>
            <Link href="#" className="ml-4 md:ml-0">
              Contact Us
            </Link>
            <Link href="#" className="ml-4 md:ml-0">
              Shipping policy
            </Link>
            <Link href="#" className="ml-4 md:ml-0">
              Return and Exchange
            </Link>

            <Link href="#" className="ml-4 md:ml-0">
              FAQs
            </Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb--6 md:mb-0">
            <h3 className="mb-1 font-bold">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              mollitia fugiat excepturi eos totam rerum.
            </p>
            <p>
              &copy; {new Date().getFullYear()} E~Shop. All rights reserved.
            </p>
          </div>
          <FooterList>
            <h3 className="mb-1 font-bold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <FaFacebook size={22} />
              </Link>
              <Link href="#">
                <FaTwitter size={22} />
              </Link>
              <Link href="#">
                <FaSquareInstagram size={22} />
              </Link>
              <Link href="#">
                {" "}
                <FaYoutube size={22} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
