import React from 'react'
import Image from 'next/image'
import { ImageResponse } from 'next/server'

const Avatar = ({className= "", size= 14, image ="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}) => {
  const sizeClass = () => {
    return `h-${size} w-${size}`
  }
  return (
    <img //Image component
      className={`${className} inline-block ${sizeClass()} rounded-full`}
      src={image}
      alt=""
      width={80}
      height={80}
      priority= {true}
    />
  )
}

export default Avatar
