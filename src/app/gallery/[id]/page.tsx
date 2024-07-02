import Image from 'next/image'
import React from 'react'

export default function page({ params } : {
  params: {id: string}
}) {
  return (
    <main className='pt-8 px-5 flex justify-center items-center'>
      <Image 
        src={`/images/${params.id}.jpg`}
        alt={`image ${params.id}`}
        className='h-auto w-auto'
        width='800'
        height='800'
      />
    </main>
  )
}
