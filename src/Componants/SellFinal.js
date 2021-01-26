import React, { useContext } from 'react';
import { UserContext } from '../App';

const SellFinal = () => {
    const { newToken, txid, sellQuantity } = useContext(UserContext);

    return (

        <div className="box w-75 h-75">
            <h3>Step 5/5 - Finished</h3>
            <br />
            <br />
            <h3>Congratulations you have made it successfully. Remember your internal transaction ID. If ypu need any help customer support will ask for it.</h3>
            <br />
            <h1>334235</h1>
            <br />

            <h3> 976 , {txid}, {sellQuantity}, {newToken}, {Date()}</h3>

            <br />
            <br />
            <input onClick={() => alert("Transaction completed successfully.")} type="submit" value="I've stored the ID and i'm done" />


        </div>
    );
};

export default SellFinal;