import { nanoid } from 'nanoid'
import { createClient } from "@prismicio/client";
import * as prismic from "@prismicio/client";

export default async function Example({slice}) {
  const { primary } = slice;
  let items = slice.items;
  if (primary.tag.id) {
    const client = createClient("https://turbosites.cdn.prismic.io/api/v2");
    const fetchedCards = await client.get({
      filters: [prismic.filter.at("my.page.related_tags.tag", primary.tag.id)],
    });
    items = fetchedCards.results.map((card) => ({...card.data, uid:card.uid, type:card.type}));
  }
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8  m-8 xl:max-w-6xl xl:mx-auto">
      {items.map((item) => (
        <li  key={nanoid()} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={item.image.url} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {item.title[0].text}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{item.title?.[0].text}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{`${item.image.dimensions.width} X ${item.image.dimensions.height}`}</p>
        </li>
      ))}
    </ul>
  )
}

