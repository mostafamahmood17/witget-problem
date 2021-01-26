import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const SellThirdPage = () => {
    let history = useHistory();
    const { account, setAccount } = useContext(UserContext);

    return (
        <div className="box">
            <h3>Step 3/5</h3>
            <br/>
            <input className="w-75" type="text" placeholder="Enter Your IBAN account details to be credited" onBlur={(e) => setAccount(e.target.value)} required/>
            <br/>
            <br/>
            <a href="#">Where can I find my IBAN</a>
            <br/>
            <br/>
            <input type="submit" className="nextButton bg-danger" value="Next" onClick={() => history.push("/sellFourthPage")} />


        </div>
    );
};

export default SellThirdPage;