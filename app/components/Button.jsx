import React from 'react'

const Button = ({onClick, text = "Button Text", sizeX= 3.5, sizeY= 2.5, color= "indigo"}) => {
  const buttonColor = () => {
    return `bg-${color}-600 focus-visible:outline-${color}-600`
  }
  const changeSize = () => {
    return `px-${sizeX} py-${sizeY}`
  }
  console.log(buttonColor());
  const handleButton = () => {
    return (
      <button
        onClick={onClick}
        type="button"
        className= {`rounded-md ${buttonColor()}-600 ${changeSize()} text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
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