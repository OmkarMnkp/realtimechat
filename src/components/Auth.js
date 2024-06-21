


import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "../Styles/Auth.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = (props) => {

  const { setIsAuth } = props;

  const signInwithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);

    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="auth">
      <p>Sign in with Google to continue</p>
      <button onClick={signInwithGoogle}>Sign in with Google</button>
    </div>
  );
};
