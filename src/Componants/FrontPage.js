import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import './FrontPage.css'

const FrontPage = () => {
    const { country, setCountry, quantity, setQuantity } = useContext(UserContext);
    const [currency, setCurrency] = useState([]);
    

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((data) => setCurrency(data));
    }, [country]);

    const handleChange = (e) => {
        setCountry(e.target.value);
    };
    const handleNumber = (e) => {
        setQuantity(e.target.value);
    };
   

    return (
        <div>
            <div className="box">
                <h4>Stablecoin gateway - Buy</h4>
              
                    <select  onChange={handleChange}  className="w-75" name="coin" id="coin" >
                        <option>Select Country</option>
                        {currency.map(currencies => (
                            <option key={currencies.name}>
                                {currencies.name} - ( {currencies.currencies[0].code})
                            </option>
                        ))}

                    </select>
                    <br />
                    <input className="w-75" type="number" onBlur={handleNumber} placeholder="Quantity" />
                    <h3>Total cost @price AOA/TAOA</h3>
                    <Link to="/secondPage">
                    <input className="nextButton" type="submit" value="Next" />
                    </Link>

               

            </div>

        </div>
    );
};

export default FrontPage;