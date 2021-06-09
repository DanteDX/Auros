import React from "react";
import {fuego} from "@nandorojo/swr-firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import styles from "@/styles/Login.module.css";

export default function LogIn(){
    const [user] = useAuthState(fuego.auth());
    const router = useRouter();
    if(user){
        router.push("/");
    }
    return(
        <>
            {!user ? (
                <div className={styles.wrapper}>
                    Login Form 
                </div>
            ) : ("Redirecting........")}
        </>
    )
}
