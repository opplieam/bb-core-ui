import { useParams } from "react-router-dom";
import useGetToken from "./hook/useGetToken.ts";
import { useEffect } from "react";

function Callback() {
  const { email, token } = useParams();
  const { mutate } = useGetToken();
  useEffect(() => {
    mutate({ email: email, token: token });
  }, [mutate]);

  return;
}

export default Callback;
