import { createClient } from "@/prismicio";
import Header from "../components/Header";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page({ params }) {
  const client = createClient();

  const page = params.uid !== "components" ? await client.getByUID("page", params.uid) : null;
  console.log(page)
  return (
    <>
    <Header />
    <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}