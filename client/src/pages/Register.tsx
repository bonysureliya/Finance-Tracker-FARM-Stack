import { Button, TextField } from "@mui/material";
import axios from "axios";
import md5 from "md5";
import React, { FC, useState } from "react";
import LoginButton from "../components/Login/LoginButton";

const Register: FC = () => {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState("");

  function handleUsername(e: any): void {
    setUsername(e);
    console.log(username);
  }
  function handlePassword(e: any) {
    setPassword(e);
    console.log(password);
  }

  function sendDataToBackend() {
    axios
      .post("http://127.0.0.1:8000/register", {
        username: username,
        password: md5(password),
      })
      .then((response) => {
        console.log(response.data.message[0]);
      });
    console.log(username);
  }

  return (
    <div className="flex w-[100%] space-x-5">
      <div className="flex px-5 flex-col w-[400px] items-center h-[100vh] space-y-5">
        <p className="text-blue-300 text-2xl">Register</p>
        <div className="w-[250px]">
          <label>Username</label>
          <TextField onChange={handleUsername} size="small" className="w-[250px]" />
        </div>
        <div className="w-[250px]">
          <label>Password</label>
          <TextField onChange={handlePassword} size="small" className="w-[250px]" />
        </div>
        <div className="w-[250px]">
          <Button variant="contained" onClick={sendDataToBackend} size="small" className="w-full">
            This Works
          </Button>
        </div>
      </div>
      <div className="w-full h-[100vh] ">2</div>
    </div>
  );
};

export default Register;
