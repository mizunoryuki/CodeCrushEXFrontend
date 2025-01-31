"use client";
import { useTimer } from "react-timer-hook";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { timeAtom } from "@/atoms/timeAtom";

export const Timer = () => {
  const storedTime = JSON.parse(localStorage.getItem("time") ?? "{}") || {
    time: 600,
    isRunning: true,
  };

  useHydrateAtoms([[timeAtom, storedTime]]);
  const [storageTime, setStorageTime] = useAtom(timeAtom);

  const time = new Date();
  if (storageTime) {
    time.setSeconds(time.getSeconds() + storageTime.time);
  }

  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
    autoStart: true,
  });

  useEffect(() => {
    setStorageTime({
      time: minutes * 60 + seconds,
      isRunning: isRunning,
    });
  }, [minutes, seconds, isRunning, setStorageTime]);

  return (
    <div>
      <div>{`${storageTime.time}  ${storageTime.isRunning}`}</div>
    </div>
  );
};
