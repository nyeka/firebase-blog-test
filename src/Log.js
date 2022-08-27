import React, { useState } from "react";
import Main from "./components/layouts/Main";
import Navbar from "./components/Navbar";

const Log = () => {
  const [isAuth, SetisAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div>
      <Navbar isAuth={isAuth} SetisAuth={SetisAuth} />
      <Main SetisAuth={SetisAuth} isAuth={isAuth} />
    </div>
  );
};

export default Log;
