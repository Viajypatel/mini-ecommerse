import { useState, useEffect } from "react";

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchFunction(params)
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [fetchFunction, params]);

  return { data, loading, error };
};
