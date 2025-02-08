"use client";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { memoAtom } from "@/atoms/memoAtom";
import styles from "./Memo.module.scss";
import { easeOut, motion } from "framer-motion";

export const Memo = () => {
  const [memo, setMemo] = useAtom(memoAtom);
  // 初回レンダリング時にlocalStorageから保存されたメモを読み込み
  useEffect(() => {
    const savedMemo = localStorage.getItem("memoContents");
    if (savedMemo) {
      setMemo(savedMemo);
    }
  }, [setMemo]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = e.target.value;
    setMemo(newMemo);
  };
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
      className={styles.memoBox}
    >
      <div className={styles.title}>メモ</div>
      <textarea
        className={styles.textarea}
        id="story"
        name="story"
        rows={5}
        value={memo}
        onChange={handleChange}
      ></textarea>
    </motion.div>
  );
};
