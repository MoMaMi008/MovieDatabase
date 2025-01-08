import { useState, useEffect } from "react";

interface IOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

const useFetch = <T>(
  url: string | null,
  options: IOptions
): { data: T | null; loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);

        if (!response.ok) {
          throw new Error("Error while fetching");
        }
      } catch (err: unknown) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading };
};

export default useFetch;
