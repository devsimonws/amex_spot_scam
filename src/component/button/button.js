import React, { useContext } from "react";
import { ProcessCtx } from "../app";
import styles from "./button.module.scss";

const Button = (props) => {
  const clickHandler = useContext(ProcessCtx);
  return (
    <a 
      style={props.s}
      className={styles['button']} 
      onClick={clickHandler}>
        {props.children}
    </a>
  )
}

export default Button