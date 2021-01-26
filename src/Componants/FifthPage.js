import React from 'react';

const FifthPage = () => {
    
    return (
        <div className="box">
            <form action="">
                <h3>Stablecoin gateway - Sell</h3>
                <select name="token" id="">
                    <option value="token">Choose a a token</option>
                </select>
                <input type="number" />

                <h3>You will get X AOA @preco Taoa/aoa </h3>
                <br/>
                <input type="submit" value="Next" />
            </form>

        </div>
    );
};

export default FifthPage;