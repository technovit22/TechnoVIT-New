import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrSnapchat } from "react-icons/gr";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

const SocialNavLinks = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "keyframes", duration: 0.5 }}
      className="fixed px-2 py-1 bottom-2 right-2 flex flex-col items-center gap-3"
    >
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target={"_blank"}
        href="https://www.instagram.com/Technovit22/"
      >
        <AiFillInstagram className="w-9 h-9 fill-gray-400" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target={"_blank"}
        href="https://snapchat.com/add/technovit22"
      >
        <GrSnapchat className="w-8 h-8 fill-gray-400" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target={"_blank"}
        href="https://www.youtube.com/channel/UChTqHUsS72cFAujVRUqRs9g"
      >
        <RiYoutubeFill className="w-9 h-9 fill-gray-400" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target={"_blank"}
        href="mailto:technovit22@gmail.com"
      >
        <HiMail className="w-9 h-9 fill-gray-400" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target={"_blank"}
        href="https://twitter.com/technovit22"
      >
        <AiOutlineTwitter className="w-9 h-9 fill-gray-400" />
      </motion.a>
    </motion.div>
  );
};

export default SocialNavLinks;
