"use client";
import { RoomCreated } from "@/components/layout/RoomCreated";
import { RoomSelection } from "@/components/layout/RoomSelection";
import { MachingStatusAtom } from "../atoms/matchingStore";
import { useAtomValue } from "jotai";

const Page = () => {
    const matchingStatus = useAtomValue(MachingStatusAtom);
    if (matchingStatus === "select") {
        return <RoomSelection />;
    } else if (matchingStatus === "create") {
        return <RoomCreated />;
    } else {
        return <p>JoinRoom</p>;
    }
};

export default Page;
