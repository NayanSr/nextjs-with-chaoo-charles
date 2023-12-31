import { Playpen_Sans, Poppins } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import { CartProvider } from "../../providers/CartProvider";
import { Toaster } from "react-hot-toast";

// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const playpenSans = Playpen_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-shop",
  description: "E commerce site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playpenSans.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              background: "rgb(51,65,85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen ">
            <NavBar />
            <main className="bg-amber-100 text-orange-700 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
