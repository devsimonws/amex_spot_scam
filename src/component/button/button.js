import React from "react";
import styles from "./button.module.scss"

const Button = (props) => {
  return (
    <a 
      style={props.s}
      className={styles['button']} 
      onClick={props.clickHandler}>
        {props.children}
    </a>
  )
}

export default Button