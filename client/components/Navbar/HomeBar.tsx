import React from "react";
import styles from "@/styles/HomeBar.module.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import {fuego} from "@nandorojo/swr-firestore";
import Link from "next/link";

export default function HomeBar(){
    const [user] = useAuthState(fuego.auth());
    return(
        <>
            <nav className={styles.wrapper}>
                <ul className={styles.list}>
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Settings</li>
                    </ul>
                    <ul>
                        {!user ? (
                            <>
                                <li>
                                    <Link href="/signup">
                                        <a>Sign Up</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login">
                                        <a>Log In</a>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li onClick={e => fuego.auth().signOut()}>
                                    Log Out
                                </li>
                            </>
                        )}
                    </ul>
                </ul>
            </nav>
        </>
    )
}