import { atomWithStorage } from "jotai/utils";

export const timeAtom = atomWithStorage("time", {
  time: 600,
  isRunning: true,
});
