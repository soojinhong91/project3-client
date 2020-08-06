import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import UserContext from "./context/UserContext";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import ProductList from "./components/pages/booking/ProductList";

import Board from "./components/pages/booking/board/Board";
import ShowBoard from "./components/pages/booking/board/ShowBoard";
import Gear from "./components/pages/booking/gear/Gear";
import ShowGear from "./components/pages/booking/gear/ShowGear";
import Beach from "./components/pages/booking/beach/Beach";
import ShowBeach from "./components/pages/booking/beach/ShowBeach";

import MyCart from "./components/pages/MyCart";

import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/login" component={ Login } />
              <Route path="/register" component={ Register } />

              <Route path="/products" component={ ProductList } />

              <Route exact path="/boards" component={ Board } />
              <Route path="/boards/:boardId" component={ ShowBoard } />

              <Route exact path="/gears" component={ Gear } />
              <Route path="/gears/:gearId" component={ ShowGear } />

              <Route exact path="/beaches" component={ Beach } />
              <Route path="/beaches/:beachId" component={ ShowBeach } />

              <Route path="/mycart" component={ MyCart } />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

// /<Route path="/" component={  } />
