import React, { useContext, useState } from 'react';
import randomToken from 'random-token';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';


const SellFrontPage = () => {
    const { newToken, setNewToken, sellQuantity, setSellQuantity } = useContext(UserContext);
    const randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    const token = randomToken(16);

    const handleToken = (e) => {
        setNewToken(e.target.value)
       
    }
    const handleNumber = (e) => {
        setSellQuantity(e.target.value);
    };

    console.log(newToken)

    return (
        <div className="box">
            <h3>Stablecoin gateway - Sell</h3>
            <br />
            <select onChange={handleToken} name="token" required>
                <option value="">Select token</option>
                <option>{token}</option>
            </select>
            <br />
            <br />
            <input className="w-75" type="number" onBlur={handleNumber} placeholder="Quantity" required/>
            <br />
            <br />
            <br />
            <h3>You will get X AOA @price TAOA/AOA</h3>
            <br />
            <br />
            <br />
            <Link to="/sellSecondPage">
                <input className="nextButton" type="submit" value="Sell now" />
            </Link>



        </div>
    );
};

export default SellFrontPage;