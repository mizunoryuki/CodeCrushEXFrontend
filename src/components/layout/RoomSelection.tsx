import { TextButton } from "../elements/TextButton";
import styles from "../../app/matching/page.module.scss";
import roomselection from "../../components/layout/RoomSelection.module.scss";
import { useSetAtom } from "jotai";
import {
  matchingStatusAtom,
  playerAtom,
  watchWordAtom,
} from "@/atoms/matchingStore";
import { createRoom } from "@/api/matching/roomCreate";

export const RoomSelection = () => {
  const setMatchingStatus = useSetAtom(matchingStatusAtom);
  const setWatchword = useSetAtom(watchWordAtom);
  const setPlayer = useSetAtom(playerAtom);

  const handleRoomCreate = async () => {
    createRoom({ setWatchword, setPlayer });
    setMatchingStatus("create");
  };

  const handleJoinRoomClick = () => {
    setMatchingStatus("join");
  };

  return (
    <div className={`${styles.contentBox} ${roomselection.buttonBox}`}>
      <TextButton color="blue" onClick={handleRoomCreate}>
        ルームの作成
      </TextButton>
      <TextButton color="green" onClick={handleJoinRoomClick}>
        ルームの参加
      </TextButton>
    </div>
  );
};
