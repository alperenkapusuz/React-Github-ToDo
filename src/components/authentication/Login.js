import React, { useState } from "react";
import { GithubLoginButton } from "react-social-login-buttons";
import { auth, provider } from "../../firebase/Firebase";
import { useHistory } from "react-router-dom";
import { Avatar, Card, Alert } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Login.css"

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function githubSignIn() {
    try {
      setError("");
      setLoading(true);
      await auth
        .signInWithPopup(provider)
        .catch((err) => {
          alert(err.message);
        })
        .then(() => {
          history.push("/mainmenu");
        });
    } catch {
      setError("Failed to log in");
    }
  }

  return (
    <div class="container">
      <Card >
        <div class="avatar">
          <Avatar size={100} icon={<UserOutlined />} />
        </div>
        <div>
          <GithubLoginButton disabled={loading} onClick={githubSignIn} />
        </div>
      </Card>
      {error && <Alert type="error">{error}</Alert>}
    </div>
  );
};

export default Login;
