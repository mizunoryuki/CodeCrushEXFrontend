import { atomWithStorage } from "jotai/utils";

export const timeAtom = atomWithStorage("time", {
  minutes: 1,
  seconds: 0,
  isRunning: true,
});
