"use client";
import { useAtomValue } from "jotai";
import styles from "./Output.module.scss";
import { outputTextAtom } from "@/atoms/codeStore";

export const Output = () => {
    const outputText = useAtomValue(outputTextAtom);
    return (
        <div className={styles.outputGroup}>
            <h1>実行結果</h1>
            <div className={styles.outputMain}>
                {outputText.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
    );
};
