import React, { useState } from "react";
import { GithubLoginButton } from "react-social-login-buttons";
import { auth,provider } from "../../firebase/Firebase";
import {  useHistory } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  async function githubSignIn() {
    
    try {
      setError("");
      setLoading(true);
      await auth.signInWithPopup(provider).catch((err) => {
        alert(err.message);
      }).then(()=>{
        history.push("/mainmenu");
      });
    } catch {
      setError("Failed to log in");
    }
  }

  return (
    <div>
      <GithubLoginButton onClick={githubSignIn}/>
    </div>
  );
};

export default Login;
