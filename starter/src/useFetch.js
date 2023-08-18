import { useEffect, useState } from "react";

const useFetch = function (url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    console.log(abortCont);

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Tidak dapat mengambil data dari sumber yang terkait.`);
          }

          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err);
          if (err.name === "AbortError") {
            console.log("Fetch aborted!");
          } else {
            setError(err.message);
            setIsPending(false);
            setData(null);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
