import { createClient } from "@/prismicio";
import Header from "../components/Header";

export default async function Page({ params }) {
  const client = createClient();

  const page = params.uid !== "components" ? await client.getByUID("page", params.uid) : null;

  return (
    <>
    <Header />
      <h1>{page?.uid}</h1>
    </>
  )
}