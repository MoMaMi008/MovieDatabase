import { useState, useEffect } from "react";

interface IOptions {
    method: string;
    headers: {
        accept: string;
        Authorization: string;
    };
}

const useFetch = <T>(url: string, options: IOptions): { data: T | null; loading: boolean; error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error("Error while fetching")
                }
                const result = await response.json();
                setData(result);
            } catch (err: unknown) {
                console.error(err);
                setError(err instanceof Error ? err.message : "Unknown error occured")
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error};
     };

export default useFetch;
