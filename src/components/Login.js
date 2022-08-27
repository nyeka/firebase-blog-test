import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = ({ SetisAuth }) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const login = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      SetisAuth(true);
      navigate("/");
    });
  };
  return (
    <Container>
      <h3>Sign in With google</h3>
      <button onClick={login}>Login Using Google</button>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;
