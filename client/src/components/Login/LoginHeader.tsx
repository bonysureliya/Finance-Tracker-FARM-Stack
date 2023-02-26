import React from "react";

const LoginHeader = ( props:{title:string} ) => {
  return (
    <div className="text-2xl  font-bold flex justify-center">
      <p className="text-2xl font-bold">{props.title}</p>
    </div>
  );
};

export default LoginHeader;
