import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase-config";

const Login = () => {
  const [registeremail, Newregisteremail] = useState("");
  const [registerpassword, Newregisterpassword] = useState("");
  const [loginPassword, Newloginpassword] = useState("");
  const [loginemail, Newloginemail] = useState("");
  const [user, setUser] = useState({});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registeremail,
        registerpassword
      );

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginemail,
        loginPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Container>
      <div>
        <h3>Register</h3>
        <input
          type="text"
          placeholder="email"
          value={registeremail}
          onChange={(e) => Newregisteremail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={registerpassword}
          onChange={(e) => Newregisterpassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>

      <div>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="login email"
          value={loginemail}
          onChange={(e) => Newloginemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="logoin password"
          value={loginPassword}
          onChange={(e) => Newloginpassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>

      <h4>{user?.email}</h4>
      <button onClick={logout}>Log out</button>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
