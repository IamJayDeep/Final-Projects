import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Logout() {
  const { logout } = useAuth0();
  return (
    <div>
      <button
        className="py-2 px-3 border rounded-md hover:scale-105 transition ease-linear"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
}

export default Logout;
