import { atomWithStorage } from "jotai/utils";

export const memoAtom = atomWithStorage<string>("memo", "");
