import React, { useContext, useState } from 'react';
import randomToken from 'random-token';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';


const SellFrontPage = () => {
    const { newToken, setNewToken, sellQuantity, setSellQuantity } = useContext(UserContext);
    const randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    var token = randomToken(16);

    const handleToken = (e) => {
        setNewToken(e.target.value)
    }
    const handleNumber = (e) => {
        setSellQuantity(e.target.value);
    };

    return (
        <div className="box">
            <h3>Stablecoin gateway - Sell</h3>
            <select onChange={handleToken} name="token" id="">
                <option value="">Select token</option>
                <option value="token">{token}</option>
            </select>
            <br />
            <input className="w-75" type="number" onBlur={handleNumber} placeholder="Quantity" />
            <h3>You will get X AOA @preco TAOA/AOA</h3>
            <Link to="/sellSecondPage">
                <input className="nextButton" type="submit" value="Sell now" />
            </Link>



        </div>
    );
};

export default SellFrontPage;