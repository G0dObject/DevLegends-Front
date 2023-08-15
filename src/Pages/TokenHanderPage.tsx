import { useParams } from "react-router-dom";
import { store } from "..";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const TokenHanderPage = () => {
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      var decode: jwt = jwt_decode(token) as jwt;
      if (decode.exp) {
        store.setToken(token);
        window.location.href = "/";
      } else {
        alert("Something went wrong, try again");
      }
    }
  }, []);

  return <></>;
};

export interface jwt {
  aud: string;
  exp: 1692700857;
  iss: string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
}

export default TokenHanderPage;
