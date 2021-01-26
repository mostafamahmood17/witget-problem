
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FrontPage from './Componants/FrontPage';
import SecondPage from './Componants/SecondPage';
import ThirdPage from './Componants/ThirdPage';
import Buyfinal from './Componants/Buyfinal';
import { createContext, useState } from 'react';
import FourthPage from './Componants/FourthPage';
export const UserContext = createContext();


function App() {
  const [country, setCountry] = useState(null);
  const [wallet, setWallet] = useState("");
  const [quantity, setQuantity] = useState("");
  return (
    <UserContext.Provider value={ { country, setCountry, wallet , setWallet, quantity, setQuantity } }>
      <Router>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/firstPage">
            <FrontPage />
          </Route>
          <Route path="/secondPage">
            <SecondPage />
          </Route>
          <Route path="/thirdPage">
            <ThirdPage />
          </Route>
          <Route path="/fourthPage">
            <FourthPage />
          </Route>
          <Route path="/buyFinal">
            <Buyfinal />
          </Route>
        </Switch>
      </Router>


    </UserContext.Provider>

  );
}

export default App;
