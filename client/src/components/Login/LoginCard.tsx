import { Button, InputLabel, TextField } from "@mui/material";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import ButtonWithIcon from "./ButtonWithIcon";
import InputsLogin from "./InputsLogin";
import LoginButton from "./LoginButton";
import LoginHeader from "./LoginHeader";

const LoginCard = () => {
  return (
    <div className="w-[400px] px-2 py-2 h-[400px] bg-cyan-400 rounded-md drop-shadow-md space-y-3 flex flex-col">
      <LoginHeader title="Login" />
      <InputsLogin />
      <LoginButton title="Login" variant="contained" />
      <LoginButton title="Register" variant="outlined" />
      <div className="flex w-[400px] space-x-5">
        <ButtonWithIcon
          title="Login with Google"
          icon={<FaGoogle className="mr-2" />}
        />
        <ButtonWithIcon
          title="Login with Github"
          icon={<FaGithub className="mr-2" />}
        />
      </div>
    </div>
  );
};
export default LoginCard;
