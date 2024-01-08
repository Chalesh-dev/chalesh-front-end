'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ImgComponent = () => {
  const MotionLink = motion(Link);
  return (
    <MotionLink href="/" whileHover={{ scale: 1.5 }}>
      <Image
        src="/images/Header/ImgHeader.svg"
        width={40}
        height={40}
        alt="header svg"
      />
    </MotionLink>
  );
};

export default ImgComponent;
