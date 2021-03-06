import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/login">1 . 로그인화면으로</Link>
        </li>
        <li>
          <Link to="/">2 . 방리스트화면</Link>
        </li>
        <li>
          <Link to="/rooms">3 . 방페이지로</Link>
        </li>
        <li>
          <Link to="/video">4 . 화상채팅페이지로</Link>
        </li>
        <li>
          <Link to="/error">5 . 에러페이지로</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login">
          <h1>로그인</h1>
        </Route>
        <Route path="/" exact>
          <h1>방리스트</h1>
        </Route>
        <Route path="/rooms">
          <h1>노인정 방</h1>
        </Route>
        <Route path="/video">
          <h1>화상채팅</h1>
        </Route>
        <Route path="/error">
          <h1>에러페이지</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
