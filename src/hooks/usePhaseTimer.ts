import { useEffect } from "react";
import { useAtom } from "jotai";
import { useTimer } from "react-timer-hook";
import { timeAtom } from "@/atoms/timeAtom";
import { useHydrateAtoms } from "jotai/utils";

export const usePhaseTimer = () => {
  const storedTime = JSON.parse(
    localStorage.getItem("timeState") ??
      '{"minutes": 5, "seconds": 0, "isRunning": true}'
  );

  useHydrateAtoms([[timeAtom, storedTime]]);
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
  }, [minutes, seconds, isRunning, setStorageTime]);

  return { storageTime };
};
