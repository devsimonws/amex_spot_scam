import React from "react";
import Wrapper from "../wrapper/wrapper";

import styles from "./launch.module.scss";

const Launch = (props) => {

  return (
    <Wrapper>
      <img 
        id={styles.logo}
        src={require('../../asset/image/AMEX_logo-114.png')} 
        alt="AMEX logo" />
      <h1 id={styles['title']}>
        <span id={styles['title1']}>SPOT</span><br/>
        <span id={styles['title2']}>THE SCAM</span>
      </h1>
      <h2 id={styles['sub-title']}>
        Protect yourself from <br/>
        phishing scams
        </h2>
      <div id={styles['desc']}>
        <p>
          Want to know how to spot a scam <br/>
          and keep your Account safe?
        </p>
        <p className="p1">
          Phishing emails are easy to spot once you know <br/>
          what you're looking for. Our handy advice will <br/>
          help you stay one step ahead.
        </p>
      </div>
      <a className="button">Start Spotting</a>
      <a>More about phishing</a>
    </Wrapper>
  )
};

export default Launch;