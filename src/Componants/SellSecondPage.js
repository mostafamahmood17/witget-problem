import React , { useContext, useState }  from 'react';
import "./SecondPage.css"
import WAValidator from "wallet-address-validator";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';


const SellSecondPage = () => {
    const { wallet, setWallet } = useContext(UserContext);
    const [iniWallet ='1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', setIniWallet] = useState("");

    let history = useHistory();

  const validWallet = () => {
    const valid = WAValidator.validate(iniWallet , "BTC");
    console.log(valid)
    if (valid) {
        setWallet(iniWallet);
      history.push("/sellThirdPage");
      
    } else {
      alert("Address INVALID");
    }
  };

    return (
        <div className="box">
       
                <h3>Setup 2/4</h3>
                <input onBlur={(e)=>setIniWallet(e.target.value)} type="text" placeholder="Enter your BSC wallet address" required/>
                <br />
                <h3>If for some reason we can not proceed with your sale (which is rare) we will completely return your assets. Please provide a BSC valid wallet address that you have access a BSC valid wallet attention to not input any incorrect information.</h3>
                <br />
                <a className="anchor" text-align="center" href="https://www.binance.org/en/smartChain" target="_blank" >Don't have a BC wallet yet?</a>
                <br/>
                <input onClick={validWallet} className="nextButton" type="submit" value="Next"/>

         

        </div>
    );
};

export default SellSecondPage;