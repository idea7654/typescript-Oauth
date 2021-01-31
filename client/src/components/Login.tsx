import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import * as config from "../config";
type body = {
  username: string;
  password: string;
};

type post = {
  token: string;
};

const Login: React.FC = () => {
  const clientID = config.CLIENT_ID;
  const handleSuccess = async (res: any) => {
    let body: post = await {
      token: res.tokenId,
    };
    const result: any = await axios.post(
      "http://localhost:5000/auth/google",
      body
    );
    console.log(result);
  };

  const handleFail = (err: any) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="로그인"
        onSuccess={handleSuccess}
        onFailure={handleFail}
      ></GoogleLogin>
    </div>
  );
};

export default Login;
