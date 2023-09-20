import { useState, createContext } from "react";
export const AuthContext = createContext();

function AuthContextProviderComponent({ children }) {

  

  let [isAuth,setIsAuth]=useState(false);
  

  return (

    <AuthContext.Provider value={{ isAuth , setIsAuth}}>
      {children}
    </AuthContext.Provider>

  );
}

export default AuthContextProviderComponent;