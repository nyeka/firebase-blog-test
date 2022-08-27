import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";

const Google = () => {
  const provider = new GoogleAuthProvider();

  const login = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    });
  };

  
  return (
    <div>
      <button onClick={login}>sign using google</button>
      <h3>{localStorage.getItem("name")}</h3>
      <h3>{localStorage.getItem("email")}</h3>
      <img src={localStorage.getItem("profilePic")} alt="profile" />
    </div>
  );
};

export default Google;
