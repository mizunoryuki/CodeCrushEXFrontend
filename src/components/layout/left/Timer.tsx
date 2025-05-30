"use client";
import { toMin } from "@/utils/toMin";
import styles from "./Timer.module.scss";
import { usePhaseTimer } from "@/hooks/usePhaseTimer";
import { toSec } from "@/utils/toSec";
import { useEffect, useRef, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import SendStatus from "@/api/status/sendStatus";
import { playerAtom, watchWordAtom } from "@/atoms/matchingStore";
import { phaseStatusAtom } from "@/atoms/phaseStatusAtom";
import useStatus from "../../../hooks/useStatus";
import { myCodeAtom } from "@/atoms/codeStore";
import sendCode from "@/api/code/sendCode";
import useCode from "@/hooks/useCode";
import { easeOut, motion } from "framer-motion";

export const Timer = () => {
  const watchWord = useAtomValue(watchWordAtom);
  const player = useAtomValue(playerAtom);
  const status = useAtomValue(phaseStatusAtom);
  const [code, setCode] = useAtom(myCodeAtom);
  const [color, setColor] = useState("green");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const timeoutSec = useRef(30);
  const statusId = useRef(2);
  useCode(watchWord, player);

  const time = usePhaseTimer(timeoutSec.current, () => {
    // SendStatus(watchWord, player, statusId.current);
  });
  useStatus(watchWord);

  useEffect(() => {
    console.log(`!!!!!!!!!!!!!!!!!!!!   ${status || null}`);

    if (!time.isFinish) return;

    if (status == "read") {
      console.log("readですよ");
      timeoutSec.current = 20;
      statusId.current = 2;
    } else if (status == "delete") {
      console.log("deleteですよ");
      timeoutSec.current = 20;
      statusId.current = 3;
      console.log(`player: ${player} \n code: ${code}`);
      sendCode(watchWord, player, code);
    } else if (status == "fix") {
      console.log("fixですよ");
      statusId.current = 4;
    } else if (status == "answer") {
      statusId.current = 5;
    }

    console.log(`status: ${status}`);
    SendStatus(watchWord, player, statusId.current);
    console.log(`statusId: ${statusId.current}`);
  }, [time.isFinish]);

  useEffect(() => {
    if (time.remainingTime !== null) {
      const newMin = toMin(time.remainingTime);
      const newSec = toSec(time.remainingTime);
      setMin(newMin);
      setSec(newSec);

      if (newMin < 1 && newSec < 20) {
        setColor("red");
      } else if (newMin < 1) {
        setColor("yellow");
      } else {
        setColor("green");
      }
    }
  }, [time.remainingTime]);

  return status === "answer" ? (
    <motion.div
      initial={{ height: "100%" }}
      animate={{
        opacity: [0, 1],
        scale: [0.6, 1],
      }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: easeOut,
        repeatType: "loop",
      }}
      className={`${styles.time} ${styles[color]}`}
    >
      終了
    </motion.div>
  ) : (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.6, 1],
      }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: easeOut,
        repeatType: "loop",
      }}
      className={`${styles.time} ${styles[color]}`}
    >
      <span className={styles["time-span"]}>残り時間</span>
      {`${min}:${sec < 10 ? "0" + sec : sec}`}
    </motion.div>
  );
};
