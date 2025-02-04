import { ConnectPlayer, ConnectReturn } from "./type";

//ルームがあるかどうかを調べる
export const searchWatchword = async (
    watchword: string
): Promise<ConnectReturn | null> => {
    try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const url = `${apiKey}api/${watchword}/search`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("ネットワーク応答が正常ではありません");
        }

        const data: ConnectPlayer = await response.json();
        console.log("Success:", data);
        console.log(`watchword: ${data.watchword}`);

        if (data.watchword) {
            // ルームがすでにある場合、joinRoom を実行してその結果を返す
            const connect = await joinRoom(watchword, data.player);
            return connect;
        }

        return null;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};

//ルームに参加
export const joinRoom = async (watchword: string, player: string) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `${apiKey}api/${watchword}/connection`;
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                player: player,
            }),
        });

        if (!res.ok) {
            console.error(`Failed to create article: ${res.statusText}`);
            return null;
        }

        const connect: ConnectReturn = await res.json();
        console.log("connecting success.");
        return connect;
    } catch (error) {
        console.error("Error creating article:", error);
        return null;
    }
};
