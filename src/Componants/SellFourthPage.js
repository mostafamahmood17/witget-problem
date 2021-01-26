import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const SellFourthPage = () => {
    let history = useHistory();
    const { account, wallet, newToken, txid, setTxid, sellQuantity} = useContext(UserContext);
    const sellInfo = () => {
        const totalInfo = { account, wallet, newToken, txid, sellQuantity };
        console.log(totalInfo)

        fetch("http://localhost:5000/sell", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(totalInfo)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                    history.push("/finalPage");
                }
                else { alert("Something is wrong") 
            }
            });
    };

    return (
        <div className="box">
            <h3>Step 4/5</h3>
            <h3>
                Transfer your tokens {sellQuantity} to the following BSN (Biance smart chain)
               address and enter the result in a TXid
          </h3>
            <h3 className="overflow-auto">0xd215423aAd24dA82f782eA845aeD269E621</h3>
            <br/>
            <input type="text" className="form-control my-5" placeholder="TXid (mandatory info)" onBlur={(e) => setTxid(e.target.value)} required/>
            <br/>
            <input value="Next" className="nextButton bg-danger" type="submit" onClick={sellInfo} />

        </div>

    );
};

export default SellFourthPage;