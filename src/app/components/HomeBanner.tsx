import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700">
      <div className="mx-auto px-8 py-12 flex flex-col gap-3 md:flex-row items-center justify-evenly">
        <div className="mb-4 md:mb-0 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Summer Sale!
          </h2>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy descount on selected items
          </p>
          <h2 className="text-3xl md:text-5xl text-yellow-300 font-bold">
            GET 50% OFF
          </h2>
        </div>
        <div className="w-1/3 relative aspect-video ">
          <Image
            src="/banner-image.png"
            fill
            alt="banner Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
