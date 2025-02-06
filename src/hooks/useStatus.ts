import { useState, useEffect } from "react";

const useStatus = (watchword: string) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  // const url = `${apiKey}sse/${watchword}/statusGet`;
  const url = `${apiKey}sse/${watchword}/statusGet`;
  const [status, setStatus] = useState<string>("status");

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      console.log(`sse: ${event.data}`);
      setStatus(event.data);
    };

    // コンポーネントがアンマウントされたときに接続を閉じる
    return () => {
      eventSource.close();
    };
  }, [url]);

  return { status, setStatus };
};

export default useStatus;
