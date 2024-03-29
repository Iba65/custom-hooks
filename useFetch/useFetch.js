import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    if (!state.isLoading) {
      setState({
        ...state,
        isLoading: true,
      });
    }

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  const reload = () => {
    getFetch();
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return { ...state, reload };
};
