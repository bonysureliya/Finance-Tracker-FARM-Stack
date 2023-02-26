import { Button } from "@mui/material";
import React from "react";
import { IconBaseProps } from "react-icons";
import { FaGoogle } from "react-icons/fa";

const ButtonWithIcon = (props : {title:string,icon:any}) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex justify-center w-full ">
        <Button size="small" className="w-full" variant="outlined">
          {props.icon}
          {props.title}
        </Button>
      </div>
    </div>
  );
};

export default ButtonWithIcon;
