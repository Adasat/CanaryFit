import React, { createContext, useContext, useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import { getOneUserbyEmail } from "@/app/services/user.services";

export const userContext = createContext(null)

 function Context({ children }) {

  const getUserbyEmail = async () => {
    const email =  await window.localStorage.getItem('email');

    const res = await getOneUserbyEmail(email)
    setUser(res)
  }
  

  

  useEffect(() => {
getUserbyEmail()  
}, []);



 

  return (
    <userContext.Provider value={{ user, setUser}}>
      {children}
    </userContext.Provider>
  );
}
 
export default Context