import { Route } from "react-router-dom";
import Header from "../route/Header";
import Footer from "../route/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "../css/toy.css";

import Board from "./board/Board";
import Login from "./login/Login";
import Register from "./register/Register.jsx";
import Product from "./product/Product.jsx";
import Cart from "./cart/Cart";
import History from "./history/History";
import Naver from "./naver/Naver.jsx";
import { useState } from "react";
import BoardDetail from "./board/BoardDetail";
import CreateBoard from "./board/CreateBoard";

function App() {
  const [userId, setUserId] = useState("bomi@bomi.com");

  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
