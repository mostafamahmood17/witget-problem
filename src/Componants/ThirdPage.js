import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThirdPage = () => {

    const [selectBank, setSelectBank] = useState("Chose Your Bank");

    const handleChange = (e) => {
          setSelectBank(e);
    };
    return (
        <div className="box">
            <form >
                <h3>STEP 3/4</h3>
                <select onSelect={handleChange} name="bank" id="bank">
                    <option value="Private Bank">Private Bank</option>
                    <option value="Public Bank">Public Bank</option>
                    <option value="Our Bank">Our Bank</option>
                    <option value="Rural Bank">Rural Bank</option>
                </select>
                <br />
                <h3>Transfers between banks are usually faster. If available give preference to your local Bank and the system will automaticlly find the best P2P for you.</h3>
                <br />
                <br />
                
                <a className="anchor" href="#">How long does it usually take?</a>
                <br/>
                <Link to="/fourthPage">
                <input className="nextButton" type="submit" value="Next"/>
                </Link>
            </form>
        </div>
    );
};

export default ThirdPage;