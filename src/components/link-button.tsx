"use client";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function LinkButton({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        className="w-[148px] flex gap-x-2 items-center p-2 bg-zinc-900 text-white font-bold rounded"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        {text}
        <motion.div
          initial={{
            x: 0,
          }}
          animate={{
            x: 10,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FontAwesomeIcon icon={faArrowRightLong} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
