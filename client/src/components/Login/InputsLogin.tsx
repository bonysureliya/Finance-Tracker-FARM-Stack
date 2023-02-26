import { TextField } from "@mui/material";
import React, { useState } from "react";

const InputsLogin = (props: {changeUser : Function , changePass : Function}) => {

  return (
    <div className="flex flex-col space-y-2 ">
      <label className="">Username</label>
      <TextField className="" onChange={(e) => props.changeUser(e.target.value)}  size="small" />
      <label className="">Password</label>
      <TextField className="" onChange={(e) => props.changePass(e.target.value)} type="password" size="small" />
    </div>
  );
};

export default InputsLogin;
