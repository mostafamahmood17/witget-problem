import React , { useContext, useState }  from 'react';
import "./SecondPage.css"
import WAValidator from "wallet-address-validator";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';


const SecondPage = () => {
    const { wallet, setWallet } = useContext(UserContext);
    const [inWallet , setInWallet] = useState("1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck");


    let history = useHistory();

  const validWallet = () => {
    const valid = WAValidator.validate(inWallet , "BTC");
    if (valid) {
      history.push("/thirdPage");
      setWallet(inWallet);
    } else {
      alert("Please input the correct address");
    }
  };

    return (
        <div className="box">
            
                <h3>Setup 2/4</h3>
                <input onBlur={(e)=>setInWallet(e.target.value)} type="text" placeholder="Enter your BSC wallet address"></input>
                <br />
                <h3>You will receive your TAOA in this address</h3>
                <br />
                <h3>Pay close attention mistakes will make you loose all your assets and there is nothing we can do to help</h3>
                <a className="anchor" text-align="center" href="https://www.binance.org/en/smartChain" target="_blank" >Don't have a BC wallet yet?</a>
                <br/>
                <input onClick={validWallet} className="nextButton" type="submit" value="Next"/>
           

        </div>
    );
};

export default SecondPage;