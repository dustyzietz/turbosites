import React from 'react'

const defaultImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

const Avatar = ({className= "", size= 14, image = defaultImage}) => {
  const sizeClass = () => {
    return `h-${size} w-${size}`
  }
  return (
    <img    
      className={`${className} inline-block ${sizeClass()} rounded-full`}
      src={image}
      alt=""
    />
  )
}

export default Avatar
