import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { nanoid } from 'nanoid'
import { createClient } from "@prismicio/client";
import * as prismic from "@prismicio/client";

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

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
    <div className="bg-gray-200 p-8">
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-6xl xl:mx-auto ">
      {items.map((item) => (
        <li
          key={nanoid()}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8 px-4">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={item.image.url} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{item.title?.[0].text}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500 overflow-ellipsis overflow-hidden max-h-24">{item.description?.[0]?.text}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {item.type ? item.type : item.badge?.[0].text}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`/${item.uid}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`/${item.uid}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}

