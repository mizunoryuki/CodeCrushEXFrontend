"use client";
import { toMin } from "@/utils/toMin";
import styles from "./Timer.module.scss";
import { usePhaseTimer } from "@/hooks/usePhaseTimer";
import { toSec } from "@/utils/toSec";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";

const pages = ["read", "delete", "fix", "answer"];

export const Timer = () => {
  // const phaseStatus = useAtomValue(phaseStatusAtom);
  const phaseStatus: string = "read";
  let timeoutSec: number = 0;
  const router = useRouter();

  if (phaseStatus === "read") {
    timeoutSec = 180;
  } else if (phaseStatus === "delete") {
    timeoutSec = 180;
  } else if (phaseStatus === "fix") {
    timeoutSec = 380;
  }

  const currentIndex = pages.indexOf(phaseStatus);

  const time =
    usePhaseTimer(timeoutSec, () => {
      router.push(`/${pages[currentIndex + 1]}`);
    }) ?? 0;
  const [color, setColor] = useState("green");

  useEffect(() => {
    if (toMin(time) < 1 && toSec(time) < 20) {
      setColor("red");
    } else if (toMin(time) < 1) {
      setColor("yellow");
    } else {
      setColor("green");
    }
  }, [time]);

  return phaseStatus === "anser" ? (
    <div className={`${styles.time} ${styles[color]}`}>終了！！！！</div>
  ) : (
    <div className={`${styles.time} ${styles[color]}`}>
      <span className={`${styles[`time-span`]}`}>残り時間</span>
      {`${toMin(time)}:${
        toSec(time) < 10 ? "0" + toSec(time) : "" + toSec(time)
      }`}
    </div>
  );
};
