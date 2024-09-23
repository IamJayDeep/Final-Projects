import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <button className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md hover:scale-105 transition ease-linear">
          {user.nickname}
        </button>
      </div>
    )
  );
};

export default Profile;
