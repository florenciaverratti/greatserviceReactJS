import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user] = useState(null)

    return (
        <UserContext.Provider value={{ user}}> 
            {children}
        </UserContext.Provider>
    )
} 