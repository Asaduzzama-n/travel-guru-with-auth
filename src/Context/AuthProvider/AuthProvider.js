import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {


    const auth = getAuth(app)
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);

    const createUserWithEmail = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLoginWithEmail = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const verifyUser = () =>{
        return sendEmailVerification(auth.currentUser);
    }
    
    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser?.emailVerified === null || currentUser?.emailVerified){
                setUser(currentUser);
                console.log(currentUser);
            }
            setLoading(false)

        })

        return ()=> unsubscribe();
    },[])


    const logOutUser = () =>{
        return signOut(auth);
    }

    const authValue = {user,createUserWithEmail,userLoginWithEmail,logOutUser,loading,verifyUser,setLoading}

    return (
        <AuthContext.Provider value={authValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;