import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img src="./public/RZ.png" alt="" /> */}
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/rahmat.zaki.315" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/rahmatz6814/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCowr-ynwEcf5Kx3hluJk2tw" target="_blank">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://github.com/rzaki002" target="_blank">
            <img src="/github-mark-white.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
