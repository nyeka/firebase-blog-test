import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = ({ SetisAuth }) => {
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [regemail, setregemail] = useState("");
  const [regpassword, setregpassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithPopup(auth, provider).then(() => {
        localStorage.setItem("isAuth", true);
        SetisAuth(true);
        navigate("/");
      });
      await sendEmailVerification(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, regemail, regpassword);
      await sendEmailVerification(auth);
      localStorage.setItem("isAuth", true);
      SetisAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  sendEmailVerification(auth.currentUser).then(() => {
    console.log("email sent");
  });

  const githublogin = async () => {
    await signInWithPopup(auth, githubProvider)
      .then(() => {
        localStorage.setItem("isAuth", true);
        SetisAuth(true);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <h3>Sign in</h3>
      <div>
        <input
          type="text"
          placeholder="email"
          value={regemail}
          onChange={(e) => setregemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={regpassword}
          onChange={(e) => setregpassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>
      <button onClick={login}>Login Using Google</button>
      <button onClick={githublogin}>Login with github</button>
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
