import { createClient } from "@/prismicio";
import Header from "@/app/components/Header";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page({ params }) {
  const client = createClient();

  const page =
    params.uid !== "components"
      ? await client.getByUID("post", params.uid)
      : null;
  const { slices } = page.data;
  for (let i = 0; i < slices.length; i++) {
    if (slices[i].slice_type === "hero" && slices[i].primary.relationship?.id) {
      // need to fetch the post or page with the id.
      const result = await client.getByUID(
        slices[i].primary.relationship.type,
        params.uid
      );
      // map in title, description, image, and subtitle
      slices[i] = {
        ...slices[i],
        primary: {
          ...slices[i].primary,
          title: result.data.title,
          description: result.data.description,
          image: result.data.image,
          subtitle: result.data.subtitle,
        },
      };
    }
  }
  return (
    <>
      <Header />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
