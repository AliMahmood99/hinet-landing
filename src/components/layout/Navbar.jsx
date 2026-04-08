"use client";

import Logo from "@/components/common/Logo";
import NavMenu from "./NavMenu";
import MobileNav from "@/components/layout/MobileNav";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex items-center justify-between py-6 px-6 lg:px-[60px] bg-transparent"
    >
      <div className="flex-shrink-0 relative z-50">
        <Logo />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:block relative z-50">
        <NavMenu />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden relative z-50">
        <MobileNav />
      </div>
    </motion.header>
  );
}

// const blobStyle = {
//   width: "799.966px",
//   height: "326.651px",
//   transform: "translate(-50%, -50%) rotate(-43.199deg)",
//   borderRadius: "799.966px",
//   opacity: 0.5,
//   background:
//     "linear-gradient(180deg, rgba(110, 81, 224, 0.24) 0%, rgba(110, 81, 224, 0.00) 100%)",
//   filter: "blur(36.61802291870117px)",
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   zIndex: -1,
//   pointerEvents: "none",
// };
