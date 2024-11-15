
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';



export const AuthContext = createContext(null);
import axios from "axios";
import app from '../firebase/firebase.config';
// import app from '../firebase/firebase.config';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const googleAuth = new GoogleAuthProvider();
    const githubAuth = new GithubAuthProvider();

    const createuser = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const updateAccount = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: { name },
            photoURL: { photo },

        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuth);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuth);
    }
    const generalLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user status  :', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = { user, createuser, googleLogin, generalLogin, logOut, githubLogin , updateAccount , loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;