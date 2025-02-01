import { Input } from "../elements/Input";
import { TextButton } from "../elements/TextButton";
import styles from "../../app/matching/page.module.scss";
import joinRoom from "../layout/JoinRoom.module.scss";

export const JoinRoom = () => {
    return (
        <div className={`${styles.contentBox} ${joinRoom.joinBox}`}>
            <div className={joinRoom.watchwordBox}>
                <p>
                    対戦相手とマッチングするための合言葉を入力してください。
                    <br />
                    同じ合言葉を入力したプレイヤー同士がマッチングします。
                </p>
                <Input placeholder="あいことばを入力" iconUrl="/icon.png" />
            </div>
            <TextButton color="green">参加</TextButton>
        </div>
    );
};
