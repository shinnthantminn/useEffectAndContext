import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({
    isLoading: false,
    value: [],
    error: null,
  });

  useEffect(() => {
    setData((pre) => ({ ...pre, isLoading: true }));
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData((pre) => ({ ...pre, isLoading: false, value: data }));
      })
      .catch((e) => {
        setData((pre) => ({ ...pre, isLoading: false, error: e }));
      });
  }, []);

  return [data];
};

export default useFetch;
