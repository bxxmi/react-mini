import { Route, useLocation } from "react-router-dom";
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
import { useEffect, useState } from "react";
import BoardDetail from "./board/BoardDetail";
import CreateBoard from "./board/CreateBoard";
import HistoryDetail from "./history/HistoryDetail";
import UserInfoList from "./register/UserInfoList";
import cookie from "react-cookies";
import axios from "axios";

function App() {
  const [userId, setUserId] = useState("");

  const location = useLocation();

  useEffect(() => {
    // 아래와 같이 string을 비교하는 경우 변수를 뒤에다 두는 것이 좋다.
    if ("/register" !== location.pathname) {
      checkSession();
    }
  }, [location.pathname]);

  const checkSession = async () => {
    // cookie.load => 저장된 쿠키 값 불러오기
    const tokenId = cookie.load("token_id");
    const tokenName = cookie.load("token_name");
    const tokenPwd = cookie.load("user_password");

    if (tokenId && tokenName) {
      axios
        .post("/api/user?type=sessionCheck", {
          token_id: tokenId,
          token_name: tokenName,
        })
        .then((response) => {
          // 유저 아이디 세팅
          setUserId(response.data.decrypt_id.user_email);
          // 쿠키 패스워드 검증
          if (tokenPwd) {
            axios
              .post("/api/user?type=sessionSignin", {
                user_email: response.data.decrypt_id.user_email,
                user_password: tokenPwd,
              })
              .then((response) => {
                if (!response.data[0].user_email) {
                  // 로그인 상태 해제 처리
                  notLogin();
                }
              })
              .catch((e) => {});
          } else {
            // 로그인 상태 해제 처리
            notLogin();
          }
        });
    } else {
      // 로그인 상태 해제 처리
      notLogin();
    }
  };

  const notLogin = () => {
    if (location.hash != "nocookie") {
      removeCookie();
    }
    setTimeout(() => {
      window.location.href = "/login/#nocookie";
    }, 100);
  };

  const removeCookie = () => {
    cookie.remove("token_id", { path: "/" });
    cookie.remove("token_name", { path: "/" });
    cookie.remove("user_passowrd", { path: "/" });
  };

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/userInfo" component={UserInfoList} />
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
