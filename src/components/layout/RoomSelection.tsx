import { TextButton } from "../elements/TextButton";
import styles from "./RoomSelection.module.scss";

export const RoomSelection = () => {
    return (
        <div className={styles.contentBox}>
            <TextButton color="blue">ルームの作成</TextButton>
            <TextButton color="green">ルームの参加</TextButton>
        </div>
    );
};
