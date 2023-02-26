import React, { FC } from "react";
import LoginCard from "../components/Login/LoginCard";

const LoginPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-cyan-400 to-blue-400">
      <LoginCard />
    </div>
  );
};

export default LoginPage;
