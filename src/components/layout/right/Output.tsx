import styles from "./Output.module.scss";

type Prop = {
    outputText: string;
};

export const Output = ({ outputText }: Prop) => {
    return (
        <div className={styles.outputGroup}>
            <h1>実行結果</h1>
            <div className={styles.outputMain}>{outputText}</div>
        </div>
    );
};
