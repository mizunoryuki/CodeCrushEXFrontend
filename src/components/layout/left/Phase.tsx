import { PhaseIcon } from "@/components/elements/PhaseIcon";
import styles from "./Phase.module.scss";
//import { useAtom } from "jotai";

export const Phase = () => {
  // const [phaseState,] = useAtom(phaseStatusAtom);
  const phaseState: string = "read";
  return (
    <div className={styles.phase}>
      <PhaseIcon phase="answer" isOn={true} />

      <div>
        {phaseState === "read" ? "コードをしっかり読んで理解しよう！！" : ""}
        {phaseState === "delete" ? "コードを消して妨害しよう！" : ""}
        {phaseState === "fix" ? "コードを修復しよう！！" : ""}
        {phaseState === "answer" ? "答え合わせ！！" : ""}
      </div>
    </div>
  );
};
