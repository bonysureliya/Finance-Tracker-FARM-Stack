import { Button } from "@mui/material";
import React from "react";

const LoginButton = ( props:{
                            title:string ,
                            variant:any ,
                            onSubmitFunc? : Function
                        } ) => {
  return (
    <div className="flex justify-center">
        <Button size="small" onClick={() => props.onSubmitFunc} className="w-full" variant={props.variant}>
          {props.title}
        </Button>
      </div>
  );
};

export default LoginButton;
