"use client";
import { useAtomValue } from "jotai";
import styles from "./Output.module.scss";
import { outputTextAtom } from "@/atoms/codeStore";
import { easeOut, motion } from "framer-motion";

export const Output = () => {
  const outputText = useAtomValue(outputTextAtom);
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.6, 1],
      }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        ease: easeOut,
        repeatType: "loop",
      }}
      className={styles.outputGroup}
    >
      <h1>実行結果</h1>
      <div className={styles.outputMain}>
        {outputText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </motion.div>
  );
};
