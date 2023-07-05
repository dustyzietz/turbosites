import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'

export default function Example({size= 5, color= "red", icon = "plus"}) {
  const buttonSize = () => {
    return`h-${size} w-${size}`;
  }

  const changeColor = () => {
    return `bg-${color}-600 focus-visible:outline-${color}-600`
  }

  const handleIcon = () => {
    if(icon === "minus"){
      return <MinusIcon className= {buttonSize()} aria-hidden="true" />
    }else{
      return <PlusIcon className= {buttonSize()} aria-hidden="true" />
    }
  } 
  return (
    //change color, hover color?
      <button
        type="button"
        className = {`rounded-full ${changeColor()} p-2 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
        {handleIcon()}
      </button>
  )
}