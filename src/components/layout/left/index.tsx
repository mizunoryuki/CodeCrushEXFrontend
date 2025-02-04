import { Memo } from "./Memo";
import { Phase } from "./Phase";
// import { Timer } from "./Timer";
import styles from "./index.module.scss";

export const Left = () => {
    return (
        <div className={styles.left}>
            <Phase />
            {/* <Timer /> */}
            <Memo />
        </div>
    );
};
