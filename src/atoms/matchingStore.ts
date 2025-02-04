import { atom } from "jotai";

type MatchState = "select" | "create" | "join";

//matching画面のコンポーネント変化のためのステータス
export const matchingStatusAtom = atom<MatchState>("select");

//あいことば
export const watchWordAtom = atom<string>("123456");
