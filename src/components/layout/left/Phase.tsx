"use client";
import { PhaseIcon } from "@/components/elements/PhaseIcon";
import styles from "./Phase.module.scss";
import { useAtomValue } from "jotai";
import { phaseStatusAtom } from "@/atoms/phaseStatusAtom";
import { easeOut, motion } from "framer-motion";
//import { useAtom } from "jotai";

export const Phase = () => {
  const phaseState = useAtomValue(phaseStatusAtom);
  //const phaseState: string = "read";
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.6, 1],
      }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: easeOut,
        repeatType: "loop",
      }}
      className={styles.phase}
    >
      <PhaseIcon
        phase={phaseState as "read" | "delete" | "fix" | "answer"}
        isOn={true}
      />

      <div>
        {phaseState === "read" ? "コードをしっかり読んで理解しよう！！" : ""}
        {phaseState === "delete" ? "相手のコードを消して妨害しよう！" : ""}
        {phaseState === "fix" ? "崩されたコードを元の形に修復しよう！！" : ""}
        {phaseState === "answer" ? "振り返りと答え合わせ！！" : ""}
      </div>
    </motion.div>
  );
};
