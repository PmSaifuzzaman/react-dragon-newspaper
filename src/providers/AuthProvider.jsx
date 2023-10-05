import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
   

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
   const authInfo = {
    user,
    createUser
   }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;