import Image from 'next/image'
import React from 'react'

const Card = ({ data }) => {
  

  return (
    <div className="max-w-sm rounded relative w-full bg-slate-300">
    <div className="relative w-full h-[37vh]">
      <Image
        src={data.imgUrl}
        alt={data.title}
        fill
        className="rounded-xl"
      />
    </div>
  </div>
  )
}

export default Card