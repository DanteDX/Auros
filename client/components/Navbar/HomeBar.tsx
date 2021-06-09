import React from "react";
import styles from "@/styles/HomeBar.module.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import {fuego} from "@nandorojo/swr-firestore";

export default function HomeBar(){
    const [user] = useAuthState(fuego.auth());
    return(
        <>
            <nav className={styles.wrapper}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>{user ? "Logged In" : "Logged Out"}</li>
                </ul>
            </nav>
        </>
    )
}