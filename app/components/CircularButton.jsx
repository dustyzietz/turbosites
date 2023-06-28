import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'

export default function Example({size, color, icon = "plus"}) {
  const handleIcon = () => {
    if(icon === "minus"){
      return <MinusIcon className="h-5 w-5" aria-hidden="true" />
    }else{
      return <PlusIcon className="h-5 w-5" aria-hidden="true" />
    }
  } 
  return (
    //change color, hover color?
      <button
        type="button"
        className = {`rounded-full bg-${color}-600 p-1.5 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
        {handleIcon()}
      </button>
  )
}