import { useParams } from "react-router-dom";
import { store } from "..";
import { useEffect } from "react";

const TokenHanderPage = () => {
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      store.setToken(token);
      window.location.href = "/";
    }
  }, []);

  return <></>;
};

export default TokenHanderPage;
