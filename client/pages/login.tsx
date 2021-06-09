import React,{useState,useEffect} from "react";
import {fuego} from "@nandorojo/swr-firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import styles from "@/styles/Login.module.css";
import {LogInUserType} from '@/types/LoginUserType';

export default function LogIn(){
    const [user] = useAuthState(fuego.auth());
    const router = useRouter();
    useEffect(() =>{
        if(user){
            router.push("/")
        }
    },[])
    const defaultState = {
        userEmail:"",
        userPassword:""
    }
    const [state,setState] = useState<LogInUserType>(defaultState);
    return(
        <>
            {!user ? (
                <div className={styles.wrapper}>
                    <label>User Email: </label>
                    <input type="text" onChange={e =>{
                        setState(state => ({
                            ...state,
                            userEmail: e.target.value
                        }))
                    }}/>
                    <br />
                    <label>User Password: </label>
                    <input type="password" onChange={e =>{
                        setState(state => ({
                            ...state,
                            userPassword: e.target.value
                        }))
                    }} />
                    <br/>
                    <button onClick={async(e) =>{
                        try{
                            const credentials = await fuego.auth().createUserWithEmailAndPassword(state.userEmail,state.userPassword);
                            setState(defaultState);
                            console.log("User Sign In Success");
                            console.log(credentials);
                            
                        }catch(err){
                            console.error("There was an error with Sign In");
                            console.error(err.message);
                            setState(defaultState);
                        }
                    }}>Log In</button>
                </div>
            ) : ("Redirecting........")}
        </>
    )
}
