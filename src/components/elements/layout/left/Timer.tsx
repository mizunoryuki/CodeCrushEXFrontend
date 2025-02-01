"use client";
import styles from "./Timer.module.scss";
import { usePhaseTimer } from "@/hooks/usePhaseTimer";

export const Timer = () => {
  const { storageTime } = usePhaseTimer();

  return (
    <div className={`${styles.time} ${styles.green}`}>
      <span className={`${styles[`time-span`]}`}>残り時間</span>
      {`${storageTime.minutes}:${
        storageTime.seconds < 10
          ? "0" + storageTime.seconds
          : "" + storageTime.seconds
      }`}
    </div>
  );
};
