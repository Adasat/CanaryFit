import { createContext, useState } from "react";

export const userContext = createContext()

 function Context({ children }) {
  const [user, setUser] = useState();

  return (
    <userContextProvider value={{ user, setUser }}>
      {children}
    </userContextProvider>
  );
}