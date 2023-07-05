import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param {HeaderProps}
 */
const Header = ({ slice }) => {
  const { title, alignment} = slice.primary;
 
  const alignmentClass = () => {
    if (alignment === "left") {
      return "text-left";
    } else if (alignment === "right") {
      return "text-right";
    }else {
      return "text-center";
    }
  }

 
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${alignmentClass()} max-w-6xl mx-auto`}
    >
      <PrismicRichText field={title} />
    </section>
  );
};

export default Header;
