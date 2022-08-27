import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Navbar = ({ isAuth, SetisAuth }) => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth).then(() => {
      localStorage.clear();
      SetisAuth(false);
      navigate("/login");
    });
  };
  return (
    <Container>
      <Link to="/">Home</Link>
      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/createpost">Create post</Link>
          <button onClick={logout} style={{ cursor: "pointer" }}>
            Log Out
          </button>
        </>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  height: 78px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  color: white;
  font-size: 24px;
`;
