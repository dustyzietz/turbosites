import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Header from "./components/Header";

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("homepage");
  return (
    <>
    <Header />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
