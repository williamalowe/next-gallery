import Image from 'next/image'
import React from 'react'

export default function page({ params } : {
  params: {id: string}
}) {
  return (
    <main>
      <Image 
        src={`/images/${params.id}.jpg`}
        alt={`image ${params.id}`}
        width='800'
        height='auto'
      />
    </main>
  )
}
