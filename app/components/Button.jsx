import React from 'react'

const Button = ({onClick, text = "Button Text"}, size, color= "indigo") => {
  //FUNCTION AS AVATAR.JSX. PROPS: SIZE, COLOR
  // return (
  //   <button
  //   onClick={onClick}
  //   type="button"
  //   className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  // >
  //   {text}
  // </button>
  // )
  const buttonColor = () => {
    return (`bg-${color}-600`)
  }
  const handleButton = () => {
    return (
      <button
        onClick={onClick}
        type="button"
        className= {`rounded-md ${buttonColor()} px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      > {text}
      </button>
    )
  }
  return (
    <button //className = {`rounded-md ${buttonColor()} px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {handleButton()}    
    </button>
    
  )
}

export default Button