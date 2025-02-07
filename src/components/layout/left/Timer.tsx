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
    const [color, setColor] = useState("green");
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const router = useRouter();
    const { status, setStatus } = useStatus(watchWord);
    const timeoutSec = useRef(10);
    const statusId = useRef(2);

    const time = usePhaseTimer(timeoutSec.current, () => {
        // SendStatus(watchWord, player, statusId.current);
    });

    useEffect(() => {
        console.log(`!!!!!!!!!!!!!!!!!!!!   ${status}`);
        if (time.isFinish) {
            if (status === "read") {
                timeoutSec.current = 5;
                statusId.current = 2;
            } else if (status === "delete") {
                timeoutSec.current = 180;
                statusId.current = 3;
            } else if (status === "fix") {
                timeoutSec.current = 300;
                statusId.current = 4;
            } else if (status === "answer") {
                statusId.current = 5;
            }
            router.push(`/${status}}`);
        }
        SendStatus(watchWord, player, statusId.current);
    }, [time.isFinish, status, router, player, watchWord]);

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
