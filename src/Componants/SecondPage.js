import React , { useContext }  from 'react';
import "./SecondPage.css"
import WAValidator from "wallet-address-validator";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';


const SecondPage = () => {
    const { wallet, setWallet } = useContext(UserContext);

    const inWallet='1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck';

    let history = useHistory();

  const validWallet = () => {
    const valid = WAValidator.validate(inWallet , "BTC");
    console.log(valid)
    if (valid) {
      history.push("/thirdPage");
      setWallet(inWallet);
    } else {
      alert("Address INVALID");
    }
  };

    return (
        <div className="box">
            {/* <form action=""> */}
                <h3>Setup 2/4</h3>
                <input onBlur={validWallet} type="text" placeholder="Enter your BSC wallet address"></input>
                <br />
                <h3>You will receive your TAOA in this address</h3>
                <br />
                <h3>Pay close attention mistakes will make you loose all your assets and there is nothing we can do to help</h3>
                <a className="anchor" text-align="center" href="https://www.binance.org/en/smartChain" target="_blank" >Don't have a BC wallet yet?</a>
                <input className="nextButton" type="submit" value="Next"/>
            {/* </form> */}

        </div>
    );
};

export default SecondPage;