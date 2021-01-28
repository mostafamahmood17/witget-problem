import React, { useContext, useEffect, useState } from 'react';
import { useId } from "react-id-generator";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';


const FourthPage = () => {
    const history = useHistory();
    
    const { country, wallet , quantity, bank } = useContext(UserContext);
   

    const [htmlId] = useId();
    const IBAN = 'ABCDEFG1234567';
    

   const handleSubmit = ()=>{
       const totalValue = { country, quantity, wallet, htmlId, IBAN, bank };
        fetch("https://rocky-savannah-16999.herokuapp.com/buy", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                  body: JSON.stringify(totalValue),
                 
                })
                .then(response => response.json())
                .then(data => console.log(data))
                history.replace("/buyFinal")

    }
    
    

    return (

        <div className="box w-75 h-75">
            <form onSubmit={handleSubmit}>
                <h3>Step 4/4</h3>
                <br />
                <h3>Transfer funds to the following account</h3>
                <br />
                <h3>IBAN: {IBAN}</h3>
                <h3>Swap Id : {htmlId}</h3>
                <br />
                <h3>As soon as the funds are received the transaction to your BSC wallet will be mode the following address</h3>
                <h3 className="overflow-auto">{wallet}</h3>
                <a href="#"> Doubts?Discord or Telegram</a>
                <br/>
                <input type="submit" value="Next" />
            </form>

        </div>
    );
};

export default FourthPage;