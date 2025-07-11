import { useEffect, useState } from "react";

export function useFetch(url) {
  const [questions, setQuestions] = useState(null);
  const [dataState, setDataState] = useState("loading");

  useEffect(() => {
    async function getQuestions(endPoint) {
      try {
        const res = await fetch(endPoint);
        if (!res.ok) throw new Error("Unable to get questions...");
        const data = await res.json();
        setDataState("ready");
        setQuestions(data);
      } catch (error) {
        setDataState("error");
        console.error("Error fetching data:", error.message);
      }
    }

    getQuestions(url);
  }, [url]);

  return { questions, dataState };
}
