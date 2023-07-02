/**
 * @typedef {import("@prismicio/client").Content.SpacerSlice} SpacerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpacerSlice>} SpacerProps
 * @param {SpacerProps}
 */
const Spacer = ({ slice }) => {
  const height = slice.primary.height ? slice.primary.height : 40;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
  <div style={{height: `${height}px`}} />
    </section>
  );
};

export default Spacer;
