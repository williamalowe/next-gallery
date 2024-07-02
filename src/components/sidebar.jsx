"use client";

import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCaretLeft,
  faCaretRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  const socialLinks = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com",
    },
    {
      icon: faFacebook,
      href: "https://www.facebook.com",
    },
    {
      icon: faXTwitter,
      href: "https://www.x.com",
    },
    {
      icon: faLinkedinIn,
      href: "https://www.linkedin.com",
    },
  ];
  return (
    <div>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 left-0 w-48 h-screen bg-zinc-900 flex flex-col items-center py-8 text-white grayscale z-50"
            initial={{
              x: -200,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: -200,
            }}
          >
            <Image
              className="w-[128px] h-[128px] object-cover rounded-full"
              src="/profile.jpg"
              alt="profile picture"
              width={128}
              height={128}
            />
            <h3 className="text-2xl font-bold mt-4 italic">William Lowe</h3>
            <h5 className="">Photographer/Designer</h5>
            <p className="text-sm mx-2 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium doloremque, architecto cupiditate cumque esse ullam
              qui error in sequi facere dolore aut ab iste quo, vel beatae odit
              porro ex.
            </p>
            <ul className="flex gap-x-4 mt-auto">
              {socialLinks.map((link) => {
                return (
                  <li key={link.href}>
                    <a href={link.href} target="_blank">
                      <FontAwesomeIcon icon={link.icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <button
              className="absolute top-2 right-4"
              onClick={() => setVisible(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {!visible && (
        <button
          className="fixed left-4 top-[50%]"
          onClick={() => setVisible(true)}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      )}
    </div>
  );
}
