import HomeBar from '@/components/Navbar/HomeBar';
import '../styles/globals.css'
import {RecoilRoot} from "recoil";
import FirebaseProvider from "@/components/wrappers/FirebaseProvider";
import {FuegoProvider} from "@nandorojo/swr-firestore";
import {Fuego} from "@/scripts/fuego";
import {firebaseConfig} from "@/config/firebaseConfig";

const fuego = new Fuego(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return (
    <FuegoProvider fuego={fuego}>
       <FirebaseProvider>
        <RecoilRoot>
          <HomeBar />
          <Component {...pageProps} />
        </RecoilRoot>
    </FirebaseProvider>
    </FuegoProvider>
  )
}

export default MyApp;
