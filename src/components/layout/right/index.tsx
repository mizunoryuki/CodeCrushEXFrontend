import { Code } from "./Code";
import { Output } from "./Output";
import styles from "./index.module.scss";

export const Right = () => {
    return (
        <div className={styles.right}>
            <Code phase="read" />
            <Output outputText="testestestetstes" />
        </div>
    );
};
