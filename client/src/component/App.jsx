import { Route } from "react-router-dom";
import Header from "../route/Header";
import Footer from "../route/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Container from "@mui/material/Container";
import "../css/toy.css";

import Board from "./board/Board";
import Login from "./login/Login";
import Register from "./register/Register.jsx";
import Product from "./product/Product.jsx";
import Cart from "./cart/Cart.jsx";
import History from "./history/History.jsx";
import Naver from "./naver/Naver.jsx";
import { useState } from "react";
import BoardDetail from "./board/BoardDetail";
import CreateBoard from "./board/CreateBoard";
import HistoryDetail from "./history/HistoryDetail";

function App() {
  const [userId, setUserId] = useState("onetest@onetest.com");

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/naverApi" component={Naver} />
        <Route exact path="/createBoard" component={CreateBoard} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/board/:id" component={BoardDetail} />
        <Route path="/product" render={() => <Product userId={userId} />} />
        <Route path="/cart" render={() => <Cart userId={userId} />} />
        <Route path="/history" render={() => <History userId={userId} />} />
        <Route path="/historyDetail/:id" component={HistoryDetail} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
