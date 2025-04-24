"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  children: React.ReactNode | string;
}

export const NavLink: React.FC<NavLink> = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        variants={{
          initial: { scaleX: 0 },
          exit: { scaleX: 0, originX: "right" },
          hover: { scaleX: 1, originX: "left" }
        }}
        initial="initial"
        animate={isHovered ? "hover" : "exit"}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mt-0.5 h-[0.2px] bg-[#ebe2c4] w-full"
      />
    </Link>
  );
};
