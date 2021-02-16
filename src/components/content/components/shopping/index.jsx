import React, { useState } from 'react'

export const Shopping = () => {
  const [isHover, setisHover] = useState(false)
  return (
    <div
      className="relative w-screen h-shopping-section bg-shopping-background"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      {isHover && (
        <div className="absolute flex items-center underline text-white justify-center w-full h-full bg-yellow-500 bg-opacity-10 cursor-pointer">
          <div className="text-5xl">咖啡豆單</div>
        </div>
      )}
    </div>
  )
}
