import { atomWithStorage } from "jotai/utils";

type timeType = {
  minutes: number;
  seconds: number;
  isRunning: boolean;
};

//タイマーの時間とタイマーが進んでるかの状態
export const timeAtom = atomWithStorage<timeType>("timeState", {
  minutes: 0,
  seconds: 0,
  isRunning: true,
});
