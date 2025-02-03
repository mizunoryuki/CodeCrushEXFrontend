import { atom } from "jotai";

export const phaseStatusAtom = atom(
  async () => {
    //ここに現在のフェーズの状態を受け取る処理を書く
    return /*受け取った状態をreturn*/;
  },
  async (set) => {
    //フェーズの状態を更新する処理を書く
    set(phaseStatusAtom /*setする値*/);
  }
);
