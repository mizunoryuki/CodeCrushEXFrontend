"use client";
import { toMin } from "@/utils/toMin";
import styles from "./Timer.module.scss";
import { usePhaseTimer } from "@/hooks/usePhaseTimer";
import { toSec } from "@/utils/toSec";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import SendStatus from "@/api/status/sendStatus";
import { playerAtom, watchWordAtom } from "@/atoms/matchingStore";
import { phaseStatusAtom } from "@/atoms/phaseStatusAtom";
import useStatus from "../../../hooks/useStatus";

const pages = ["", "", "read", "delete", "fix", "answer"];

export const Timer = () => {
  const watchWord = useAtomValue(watchWordAtom);
  const [phaseStatus, setPhaseStatus] = useAtom(phaseStatusAtom);
  const player = useAtomValue(playerAtom);
  const [color, setColor] = useState("green");
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const router = useRouter();
  const { status, setStatus } = useStatus(watchWord);
  let timeoutSec: number = 0;

  if (pages[phaseStatus.status] === "read") {
    timeoutSec = 5;
  } else if (pages[phaseStatus.status] === "delete") {
    timeoutSec = 180;
  } else if (pages[phaseStatus.status] === "fix") {
    timeoutSec = 300;
  }

  const time = usePhaseTimer(timeoutSec, () => {
    SendStatus(watchWord, player, phaseStatus.status + 1);
  });

  if (time.isFinish === true) {
    router.push(`/${pages[phaseStatus.status + 1]}`);
    setPhaseStatus({ player: null, status: phaseStatus.status + 1 });
  }

  useEffect(() => {
    if (time.remainingTime !== null) {
      setMin(toMin(time.remainingTime));
      setSec(toSec(time.remainingTime));
      if (min < 1 && sec < 20) {
        setColor("red");
      } else if (min < 1) {
        setColor("yellow");
      } else {
        setColor("green");
      }
    }
  }, [time, min, sec, setSec, setMin]);

  console.log(status);

  return pages[phaseStatus.status] === "anser" ? (
    <div className={`${styles.time} ${styles[color]}`}>終了！！！！</div>
  ) : (
    <div className={`${styles.time} ${styles[color]}`}>
      <span className={`${styles[`time-span`]}`}>残り時間</span>
      {`${min}:${sec < 10 ? "0" + sec : "" + sec}`}
    </div>
  );
};
