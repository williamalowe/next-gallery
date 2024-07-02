"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ImageList() {
  const images = [
    {
      id: "01",
      src: "/images/01.jpg",
    },
    {
      id: "02",
      src: "/images/02.jpg",
    },
    {
      id: "03",
      src: "/images/03.jpg",
    },
    {
      id: "04",
      src: "/images/04.jpg",
    },
    {
      id: "05",
      src: "/images/05.jpg",
    },
    {
      id: "06",
      src: "/images/06.jpg",
    },
    {
      id: "07",
      src: "/images/07.jpg",
    },
    {
      id: "08",
      src: "/images/08.jpg",
    },
    {
      id: "09",
      src: "/images/09.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-1 pb-4">
      {images.map((img) => {
        return (
          <Link key={img.id} href={`/gallery/${img.id}`}>
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.9
              }}
            >
              <Image
                className="w-[300px] h-[300px] rounded"
                src={img.src}
                alt={`image ${img.id}`}
                width={300}
                height={300}
              />
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}