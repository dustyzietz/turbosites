import React from 'react'
import { createClient } from "@/prismicio";

const Navigation = async () => {

    const client = createClient();
    const navigation = await client.getSingle("navigation");
    console.log(navigation)
  return (
    <div>  
       {navigation.data.links.map((item) => (
      <a
        key={item.link.uid}
        href={item.link.url}
        className={` text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium capitalize`}
      >
        {item.link.uid}
      </a>
    ))}
    </div>
  )
}

export default Navigation