// "use client"

import Image from "next/image"
import Link from "next/link"

export default function ImageList() {
  const images = [
    {
      id: '1',
      src: '/images/01.jpg',
      alt: 'image 1'
    },
    {
      id: '2',
      src: '/images/02.jpg',
      alt: 'image 2'
    },
    {
      id: '3',
      src: '/images/03.jpg',
      alt: 'image 3'
    },
    {
      id: '4',
      src: '/images/04.jpg',
      alt: 'image 4'
    },
    {
      id: '5',
      src: '/images/05.jpg',
      alt: 'image 5'
    },
    {
      id: '6',
      src: '/images/06.jpg',
      alt: 'image 6'
    },
    {
      id: '7',
      src: '/images/07.jpg',
      alt: 'image 7'
    },
    {
      id: '8',
      src: '/images/08.jpg',
      alt: 'image 8'
    },
    {
      id: '9',
      src: '/images/09.jpg',
      alt: 'image 9'
    },
  ]
  return (
    <div className="grid grid-cols-3 gap-1 pb-4">
      {
        images.map((img) => {
          return (
            <Link key={img.id} href={`/gallery/${img.id}`}>
            <Image 
              className="w-[300px] h-[300px]"
              src={img.src}
              alt={img.alt}
              width="300"
              height="300"
            />
            </Link>
          )
        })
      }
    </div>
  )
}
