import { nanoid } from 'nanoid'

export default function Example({slice}) {
  const {items} = slice

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 m-8 xl:max-w-6xl xl:mx-auto ">
      {items.map((item) => (
        <div
          key={nanoid()}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={item.card_image.url} alt="" />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{item.card_title?.[0].text}</p>
              <p className="truncate text-sm text-gray-500">{item.card_description?.[0].text}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

