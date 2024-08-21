import ApiClient from "../../../services/apiClient.ts";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type GetTokenResponse = {
  access_token: string;
  email: string;
};

type GetTokenReqBody = {
  email: string;
  token: string;
};

function useGetToken() {
  const getTokenClient = new ApiClient<GetTokenResponse, GetTokenReqBody>(
    "/auth/token"
  );
  const navigate = useNavigate();
  return useMutation<GetTokenResponse, Error, GetTokenReqBody>({
    mutationFn: getTokenClient.getToken,
    onSuccess: data => {
      localStorage.setItem("token", data.access_token);
      navigate("/");
    }
  });
}

export default useGetToken;
