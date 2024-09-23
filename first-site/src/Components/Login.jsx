import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="py-2 px-3 border rounded-md hover:scale-105 transition ease-linear"
    >
      Login
    </button>
  );
}

export default Login;
