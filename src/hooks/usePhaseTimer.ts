import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect, useRef } from "react";

const deadlineTimeAtom = atomWithStorage<number | null>("deadlineTime", null);
const nowTimeAtom = atom(Date.now());

export const usePhaseTimer = (
  timeoutSec: number,
  onTimeout: () => void
): number | null => {
  const [deadlineTime, setDeadlineTime] = useAtom(deadlineTimeAtom);
  const [nowTime, setNowTime] = useAtom(nowTimeAtom);
  const remainingTime = deadlineTime === null ? null : deadlineTime - nowTime;
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setNowTime(Date.now());
    }, 1000);
  }, [setNowTime]);

  useEffect(() => {
    setDeadlineTime((v) => {
      if (v !== null) return v;
      return Date.now() + timeoutSec * 1000;
    });
  }, [setDeadlineTime, timeoutSec]);

  if (remainingTime !== null && remainingTime <= 0) {
    onTimeout();
    if (intervalId.current !== null) clearInterval(intervalId.current);
    setDeadlineTime(null);
  }
  return remainingTime;
};
