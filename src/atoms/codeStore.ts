import { atom } from "jotai";

//問題コード
export const questionCodeAtom = atom<string>("");

//自分のコード
export const myCodeAtom = atom<string>("");

//出力
export const outputTextAtom = atom<string[]>([""]);
