import { useEffect } from "react";
import { useAtom } from "jotai";
import { memoAtom } from "@/atoms/memoAtom";
import styles from "./Memo.module.scss";

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
    <div className={styles.memoBox}>
      <div className={styles.title}>メモ</div>
      <textarea
        className={styles.textarea}
        id="story"
        name="story"
        rows={5}
        value={memo}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
