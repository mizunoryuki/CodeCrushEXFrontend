import { Input } from "../elements/Input";
import { TextButton } from "../elements/TextButton";
import styles from "../../app/matching/page.module.scss";
import joinRoom from "../layout/JoinRoom.module.scss";
import { useState } from "react";
import { searchWatchword } from "@/api/matching/roomJoin";

export const JoinRoom = () => {
    const [watchwordToJoin, setWatchwordToJoin] = useState<string>("");
    //あいことばを変更するための関数
    const handleChange = (value: string) => {
        setWatchwordToJoin(value);
    };

    //参加ボタン押した時に発火する関数
    const handleClick = async () => {
        //パスワードの確認してルームに参加
        const searchInfo = await searchWatchword(watchwordToJoin);
        console.log(searchInfo);
    };
    return (
        <div className={`${styles.contentBox} ${joinRoom.joinBox}`}>
            <div className={joinRoom.watchwordBox}>
                <p>
                    対戦相手とマッチングするための合言葉を入力してください。
                    <br />
                    同じ合言葉を入力したプレイヤー同士がマッチングします。
                </p>
                <Input
                    placeholder="あいことばを入力"
                    iconUrl="/icon.png"
                    onChange={handleChange}
                />
            </div>
            <TextButton color="green" onClick={handleClick}>
                参加
            </TextButton>
        </div>
    );
};
