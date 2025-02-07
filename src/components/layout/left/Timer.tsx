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

// const pages = ["", "", "read", "delete", "fix", "answer"];

export const Timer = () => {
  const watchWord = useAtomValue(watchWordAtom);
  const player = useAtomValue(playerAtom);
  const status = useAtomValue(phaseStatusAtom);
  const [color, setColor] = useState("green");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const router = useRouter();
  //   const { status, setStatus } = useStatus(watchWord);
  const timeoutSec = useRef(0);
  const statusId = useRef(2);

  const time = usePhaseTimer(timeoutSec.current, () => {
    // SendStatus(watchWord, player, statusId.current);
  });
  useStatus(watchWord);
  let count = 0;

  useEffect(() => {
    console.log(`!!!!!!!!!!!!!!!!!!!!   ${status || null}`);
    if (time.isFinish) {
      console.log(count);
      count++;
      if (status === "read") {
        timeoutSec.current = 5;
        statusId.current = 2;
        console.log("read");
      } else if (status === "delete") {
        timeoutSec.current = 10;
        statusId.current = 3;
        console.log("delete");
      } else if (status === "fix") {
        statusId.current = 4;
        console.log("fix");
      } else if (status === "answer") {
        statusId.current = 5;
        console.log("answer");
      }
      console.log(status);
      SendStatus(watchWord, player, statusId.current);
      //   router.push(`/${status}`);
    }
    console.log(`statusId: ${statusId.current}`);
  }, [time.isFinish]);
  //   useEffect(() => {
  //       if (phaseStatus.status !== "status") redirect(`/${phaseStatus.status}`);
  //     }, [phaseStatus]);

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
    <div className={`${styles.time} ${styles[color]}`}>終了！！！！</div>
  ) : (
    <div className={`${styles.time} ${styles[color]}`}>
      <span className={styles["time-span"]}>残り時間</span>
      {`${min}:${sec < 10 ? "0" + sec : sec}`}
    </div>
  );
};
