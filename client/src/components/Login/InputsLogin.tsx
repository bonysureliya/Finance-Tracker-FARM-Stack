import { TextField } from "@mui/material";
import React, { useState } from "react";

const InputsLogin = () => {

  function handleUsername (e : any) {
    setUsername(e)
  }
  function handlePassword (e : any) {
    setPassword(e)
  }

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  console.log(username , password);
  

  return (
    <div className="flex flex-col space-y-2 ">
      <label className="">Username</label>
      <TextField className="" onChange={(e : any) => handleUsername(e.target.value)} size="small" />
      <label className="">Password</label>
      <TextField className="" onChange={(e : any) => handlePassword(e.target.value)} type="password" size="small" />
    </div>
  );
};

export default InputsLogin;
