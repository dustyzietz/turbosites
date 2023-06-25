import Image from "next/image";
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
 
  // options: text-overlay image-overlay
  const imageOverlay = false;
  const textOverlay = true;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div
        className={`absolute right-0 left-0 top-0 bottom-0 text-white flex justify-center align-center flex-col text-center ${
          imageOverlay ? "bg-opacity-60 bg-black " : ""
        }`}
      >
        <div
          className={`p-4 w-96 m-auto rounded-xl ${
            textOverlay ? " bg-opacity-70 bg-black " : ""
          }`}
        >
          <h1 className="text-5xl mb-4">{slice.primary.title?.[0].text}</h1>
          <h2 className="text-2xl mb-2">{slice.primary.subtitle?.[0].text}</h2>
          <p className="text-lg">{slice.primary.description?.[0].text}</p>
        </div>
      </div>
      <Image
        height={800}
        width={1920}
        quality={80}
        src={slice.primary.image.url}
        alt=""
        priority
      />
    </section>
  );
};

export default Hero;
