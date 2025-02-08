"use client";
import { easeOut, motion } from "framer-motion";
import styles from "./page.module.scss";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.6, 1.2, 1],
      }}
      transition={{
        duration: 0.26,
        delay: 0.2,
        ease: easeOut,
        repeatType: "loop",
      }}
      className={styles.codeBoxAll}
    >
      <div className={styles.layout}>
        <h1>プレイヤーマッチング</h1>
        {children}
      </div>
    </motion.div>
  );
}
