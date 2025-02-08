import { Input } from "../elements/Input";
import styles from "../../app/matching/page.module.scss";
import joinRooms from "../layout/JoinRoom.module.scss";
import { useState } from "react";
import { searchWatchword } from "@/api/matching/roomJoin";
import useStatus from "@/hooks/useStatus";
import { useSetAtom } from "jotai";
import { playerAtom, watchWordAtom } from "@/atoms/matchingStore";
import { joinRoom } from "@/api/matching/roomJoin";
import { PopCircleButton } from "../elements/PopCircleButton";
import { motion } from "framer-motion";

export const JoinRoom = () => {
  const [watchwordToJoin, setWatchwordToJoin] = useState<string>("");
  const setWatchword = useSetAtom(watchWordAtom);
  const setPlayer = useSetAtom(playerAtom);
  //   const [phaseStatus] = useStatus(watchwordToJoin)
  //あいことばを変更するための関数
  const handleChange = (value: string) => {
    setWatchwordToJoin(value);
  };

  //参加ボタン押した時に発火する関数
  const handleClick = async () => {
    console.log(`watchwordToJoin: ${watchwordToJoin}`);
    setWatchword(watchwordToJoin);
    //パスワードの確認してルームに参加
    const searchInfo = await searchWatchword(watchwordToJoin);
    if (searchInfo !== null) {
      console.log(searchInfo.player);
      setPlayer(searchInfo.player);
      const connect = joinRoom(watchwordToJoin, searchInfo.player);
      console.log(`connect: ${connect}`);
    }
  };

  useStatus(watchwordToJoin);

  // useEffect(() => {
  //   console.log(phaseStatus.status);
  //   if (phaseStatus.status !== "status") redirect(`/${phaseStatus.status}`);
  // }, [phaseStatus]);
  return (
    <div className={`${styles.contentBox} ${joinRooms.joinBox}`}>
      <motion.div
        className="time"
        animate={{ opacity: [0, 1], y: [40, 0], scaleY: [0.8, 1] }}
        transition={{ delay: 0.1 }}
      >
        <div className={joinRooms.watchwordBox}>
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
      </motion.div>
      <motion.div
        className="time"
        animate={{ opacity: [0, 1], y: [40, 0], scaleY: [0.8, 1] }}
        transition={{ delay: 0.2 }}
      >
        <PopCircleButton color="green" onClick={handleClick}>
          参加
        </PopCircleButton>
      </motion.div>
    </div>
  );
};
