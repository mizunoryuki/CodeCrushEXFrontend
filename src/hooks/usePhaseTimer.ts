import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useTimer } from "react-timer-hook";
import { timeAtom } from "@/atoms/timeAtom";
import { useHydrateAtoms } from "jotai/utils";

export const usePhaseTimer = () => {
  const [initialTime, setInitialTime] = useState({
    minutes: 6,
    seconds: 0,
    isRunning: true,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTime = localStorage.getItem("time");
      if (storedTime) {
        setInitialTime(JSON.parse(storedTime));
      }
    }
  }, []);

  useHydrateAtoms([[timeAtom, initialTime]]);
  const [storageTime, setStorageTime] = useAtom(timeAtom);

  const time = new Date();
  if (storageTime?.minutes != null && storageTime?.seconds != null) {
    time.setSeconds(
      time.getSeconds() + storageTime.minutes * 60 + storageTime.seconds
    );
  }

  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
    autoStart: true,
  });

  useEffect(() => {
    if (minutes === 0 && seconds === 0 && isRunning) {
      setStorageTime({
        minutes: 6,
        seconds: 0,
        isRunning: false,
      });
    } else {
      setStorageTime({
        minutes: minutes,
        seconds: seconds,
        isRunning: isRunning,
      });
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "time",
        JSON.stringify({ minutes, seconds, isRunning })
      );
    }
  }, [minutes, seconds, isRunning, setStorageTime]);

  return { storageTime };
};
