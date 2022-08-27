import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "../Login";
import Createpost from "../Createpost";

const Main = ({ SetisAuth, isAuth }) => {
  return (
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} />} />
      <Route path="/login" element={<Login SetisAuth={SetisAuth} />} />
      <Route path="/createpost" element={<Createpost />} isAuth={isAuth} />
    </Routes>
  );
};

export default Main;

const Container = styled.nav``;
