import { createClient } from "@prismicio/client";
import { nanoid } from "nanoid";
import * as prismic from "@prismicio/client";
import Image from "next/image";

export default async function Example({ slice }) {
  const { primary } = slice;
  let items = slice.items;
  let type = "page";
  if (primary.tag.id) {
    const client = createClient("https://turbosites.cdn.prismic.io/api/v2");
    if(primary.tag.type === "post_tag")type = "post";
    const fetchedCards = await client.get({
      filters: [prismic.filter.at(`my.${type}.related_tags.tag`, primary.tag.id)],
    });
    items = fetchedCards.results.map((card) => ({...card.data, uid: card.uid}));
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 m-8 xl:max-w-6xl xl:mx-auto ">
      {items.map((item) => (
        <div
          key={nanoid()}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full"
              src={item?.image.url}
              alt=""
              width={80}
              height={80}
              quality={75}
              //priority= {false}
            />
          </div>
          <div className="min-w-0 flex-1">
            <a href={`/${type === 'post' ? 'blog/' : ''}${item.uid}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">
                {item.title?.[0]?.text}
              </p>
              <p className="truncate text-sm text-gray-500">
                {item.description?.[0]?.text}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
