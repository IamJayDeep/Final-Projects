import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const authProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const contextData= {
    user
  }

  return <authContext.Provider value={}>{loading ? <p>Loading...</p> : children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authProvider)
}

export default authContext