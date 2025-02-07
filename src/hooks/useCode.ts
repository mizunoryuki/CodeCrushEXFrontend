import { useState, useEffect } from "react";

const useCode = (watchword: string, player: string) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `${apiKey}sse/${watchword}/${player}/codeGet`;
  const [code, setCode] = useState<string>("code");

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      console.log(`sse: ${event.data}`);
      setCode(event.data);
    };

    // コンポーネントがアンマウントされたときに接続を閉じる
    return () => {
      eventSource.close();
    };
  }, [url]);

  return { code: code };
};

export default useCode;
