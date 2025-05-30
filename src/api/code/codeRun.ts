type jobIdReq = {
    source_code: string;
    language: string;
    input?: string;
    api_key: string;
    longpoll: boolean;
};

export const getOutput = async (
    source_code: string
): Promise<string[] | null> => {
    try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const url = `${apiKey}api/paiza/run`;
        console.log(source_code);
        const req: jobIdReq = {
            source_code: source_code,
            language: "c",
            input: "",
            api_key: "guest",
            longpoll: true,
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        });

        const initialResult = await response.json();
        //console.log("Initial Response:", initialResult);

        if (!initialResult.id) {
            return ["ジョブの作成に失敗しました。"];
        }

        // ジョブの結果をポーリング
        const jobId = initialResult.id;
        const detailsUrl = `${apiKey}api/paiza/details/${jobId}`; // FastAPIの結果取得エンドポイント

        const pollJobDetails = async (): Promise<string[] | null> => {
            const detailsResponse = await fetch(detailsUrl);
            const jobDetails = await detailsResponse.json();
            //console.log("Job Details Response:", jobDetails);

            if (jobDetails.status === "completed") {
                if (jobDetails.stdout || jobDetails.stderr) {
                    const output: string =
                        jobDetails.stdout || jobDetails.stderr;
                    const outputArray = output.split("\n"); //改行で区切る
                    return outputArray;
                } else {
                    return ["実行結果が見つかりませんでした。"];
                }
            } else if (jobDetails.status === "running") {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // 1秒後に再ポーリング
                return pollJobDetails();
            } else {
                return ["コードの実行に失敗しました。"];
            }
        };

        return pollJobDetails();
    } catch (error) {
        console.error("エラー:", error);
        return ["エラーが発生しました。"];
    }
};
