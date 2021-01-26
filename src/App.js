
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FrontPage from './Componants/FrontPage';
import SecondPage from './Componants/SecondPage';
import ThirdPage from './Componants/ThirdPage';
import Buyfinal from './Componants/Buyfinal';
import { createContext, useState } from 'react';
import FourthPage from './Componants/FourthPage';
import SellFrontPage from './Componants/SellFrontPage';
import Navbar from './Componants/Navbar';
import SellSecondPage from './Componants/SellSecondPage';
import SellThirdPage from './Componants/SellThirdPage';
import SellFourthPage from './Componants/SellFourthPage';
import SellFinal from './Componants/SellFinal';
export const UserContext = createContext();


function App() {
  const [country, setCountry] = useState(null);
  const [wallet, setWallet] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sellQuantity, setSellQuantity] = useState("");
  const [newToken, setNewToken] = useState("");
  const [account, setAccount] = useState("");  
  const [txid, setTxid] = useState("");
  const [bank, setBank] = useState("Private Bank");
 
  
  return (
    <UserContext.Provider value={ { country, setCountry, wallet , setWallet, quantity, setQuantity, sellQuantity, setSellQuantity, newToken, setNewToken, account, setAccount, txid, setTxid, bank, setBank} }>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/sellFrontPage">
            <SellFrontPage/>
          </Route>
          <Route path="/sellSecondPage">
            <SellSecondPage/>
          </Route>
          <Route path="/sellThirdPage">
            <SellThirdPage/>
          </Route>
          <Route path="/sellFourthPage">
            <SellFourthPage/>
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
          <Route path="/finalPage">
            <SellFinal />
          </Route>
  
        </Switch>
      </Router>


    </UserContext.Provider>

  );
}

export default App;
