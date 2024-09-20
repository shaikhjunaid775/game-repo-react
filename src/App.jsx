import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinFlip from "./component/CoinflipComponent/CoinFlip";
import Home from "./Home";
import Emoji from "./component/Emoji/Emoji";
import Account from "./component/Account/Account";
import Deposit from "./component/Deposit/Deposit";
import FloatingButton from "./FloatingButton";
import DepositHistory from "./component/Deposit/DepositHistory";
import Withdraw from "./component/Withdraw/Withdraw";
import Footer from "./component/Footer";
import Wallet from "./component/Wallet/Wallet";
import WithdrawHistory from "./component/Withdraw/WithdrawHistory";
import AddBankAccount from "./component/Withdraw/AddBankAccount";
import GameHistory from "./component/Account/history/GameHistory";
import TransactionHistory from "./component/Account/history/TransactionHistory";
import VoultBox from "./component/Account/VoultBox";
import Notification from "./Notification";
import Gift from "./component/Account/Gift";
import GameStatistics from "./component/Account/GameStatistics";
import Language from "./component/Account/Language";
import Vip from "./component/VIP/Vip";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route exact index path="/" element={<Home />} />
          <Route exact index path="/notification" element={<Notification />} />
          <Route exact path="/coin" element={<CoinFlip />} />
          <Route exact path="/emoji" element={<Emoji />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/account/GameHistory" element={<GameHistory />} />
          <Route exact path="/account/TransactionHistory" element={<TransactionHistory />} />
          <Route exact path="/account/VoultBox" element={<VoultBox />} />
          <Route exact path="/account/gift" element={<Gift />} />
          <Route exact path="/account/GameStatistics" element={<GameStatistics />} />
          <Route exact path="/account/Language" element={<Language />} />

          <Route exact path="/deposit" element={<Deposit />} />
          <Route exact path="/account/depositHistory" element={<DepositHistory />} />
          <Route exact path="/withdraw" element={<Withdraw />} />
          <Route exact path="/account/withdrawHistory" element={<WithdrawHistory />} />
          <Route exact path="/wallet" element={<Wallet/>} />
          <Route exact path="/account/AddBankAccount" element={<AddBankAccount />} />
          <Route exact path="/account/vip" element={<Vip />} />

        </Routes>
        <Footer />
      </Router>
      <FloatingButton />
    </>
  );
}

export default App;
