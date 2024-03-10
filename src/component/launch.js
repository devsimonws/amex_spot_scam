import React from "react";
import Wrapper from "./wrapper/wrapper";
import Button  from "./button/button";

import styles from "./launch.module.scss";

const Launch = (props) => {

  return (
    <Wrapper>
      <img 
        className={styles.logo}
        src={require('../asset/image/AMEX_logo-114.png')} 
        alt="AMEX logo" />
      <h1 className={styles['title']}>
        <span className={styles['title1']}>SPOT</span><br/>
        <span className={styles['title2']}>THE SCAM</span>
      </h1>
      <h2 className={styles['sub-title']}>
        Protect yourself from <br/>
        phishing scams
        </h2>
      <div className={styles['desc']}>
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
      <div className={styles['button']}>
        <Button>Start Spotting</Button>
      </div>
      <a className={styles['link']}>More about phishing</a>
    </Wrapper>
  )
};

export default Launch;