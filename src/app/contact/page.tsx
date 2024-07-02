"use client"
import {
  faLinkedinIn,
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function page() {
  const contactPoints = [
    {
      icon: faEnvelope,
      text: "Example-Address@Provider.com",
    },
    {
      icon: faMobile,
      text: "0412 345 678",
    },
    {
      icon: faLocationDot,
      text: "Melbourne, Australia",
    },
  ];
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
  const socialIcon = {
    hovered: {
      y: -6
    }
  }
  const contactItem = {
    hovered: {
      fontStyle: "italic"
    }
  }
  return (
    <main className="text-center pt-8 px-5 flex flex-col items-center gap-y-4">
      <h1 className="text-4xl font-bold mb-8">Want to get in touch?</h1>
      <p>Feel free to reach out at:</p>
      <ul className="flex flex-col gap-y-4 justify-center">
        {contactPoints.map((item) => {
          return (
            <motion.li key={item.text} className="flex gap-2 items-center cursor-pointer" whileHover="hovered">
              <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <motion.div className="text-lg" variants={contactItem}>{item.text}</motion.div>
            </motion.li>
          );
        })}
      </ul>
      <p>Or check us out at:</p>
      <ul className="flex gap-x-4 mt-auto">
        {socialLinks.map((link) => {
          return (
            <li key={link.href}>
              <motion.a href={link.href} target="_blank" whileHover="hovered">
                <motion.div variants={socialIcon}>
                  <FontAwesomeIcon icon={link.icon} />
                </motion.div>
              </motion.a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
