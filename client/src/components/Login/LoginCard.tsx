import { Button, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import ButtonWithIcon from "./ButtonWithIcon";
import InputsLogin from "./InputsLogin";
import LoginButton from "./LoginButton";
import LoginHeader from "./LoginHeader";

const LoginCard = () => {

  function handleUsername (e : any): void {
    setUsername(e)
    console.log(username);
    
    
  }
  function handlePassword (e : any) {
   setPassword(e)
   console.log(password);
   
  }

  function sendDataToBackend ( ) {
    axios.post("http://127.0.0.1:8000/loginAuth", {"username" : username , "password" : password} ).then((response) => {
      console.log(response.data.message[0]);
    });
    console.log(username);
    
  }

  
  const [username , setUsername] : any  = useState("")
  const [password , setPassword] : any  = useState("")

  return (
    <div className="w-[400px] px-2 py-2 h-[400px] bg-cyan-400 rounded-md drop-shadow-md space-y-3 flex flex-col">
      <LoginHeader title="Login" />
      <InputsLogin changeUser={handleUsername} changePass={handlePassword}/>
      <LoginButton onSubmitFunc={sendDataToBackend} title="Login" variant="contained" />
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
