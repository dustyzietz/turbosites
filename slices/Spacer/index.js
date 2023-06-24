/**
 * @typedef {import("@prismicio/client").Content.SpacerSlice} SpacerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpacerSlice>} SpacerProps
 * @param {SpacerProps}
 */
const Spacer = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
  <div style={{height: `${slice.primary.height}px`}} />
    </section>
  );
};

export default Spacer;
