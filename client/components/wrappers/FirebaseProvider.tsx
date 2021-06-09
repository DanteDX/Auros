import React, {useState,createContext,useEffect} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/auth";
import "firebase/storage";
import {firebaseConfig} from "@/config/firebaseConfig";

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

export const FirebaseContext = createContext({});


export default function FirebaseProvider({children}){
    const [state,setState] = useState({});
    useEffect(() => {
        setState({
          perf: firebase.performance(),
          analytics: firebase.analytics()
        });
      }, []);
    return(
        <FirebaseContext.Provider value={state}>
            {children}
        </FirebaseContext.Provider>
    )
}