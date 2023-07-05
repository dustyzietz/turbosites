import React from 'react'

const Badge = ({text="Badge", color= "indigo", hasX}) => {
  //const changeColor = `${color} `
  const newColor = () => {
    return `${color}`
  }
  if({hasX}){
    return(
      <span className={`inline-flex items-center gap-x-0.5 rounded-md bg-${newColor()}-50 px-2 py-1 text-sm font-medium text-${newColor()}-700 ring-1 ring-inset ring-${newColor()}-600/20`}>
      {text}
      <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-indigo-600/20">
        <span className="sr-only">Remove</span>
        <svg viewBox="0 0 14 14" className={`h-3.5 w-3.5 group-hover:stroke-${newColor()}-700/75`}>
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
        <span className="absolute -inset-1" />
      </button>
    </span>
    )
  }
}


export default Badge