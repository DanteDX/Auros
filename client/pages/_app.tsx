import '../styles/globals.css'
import {RecoilRoot} from "recoil";
import FirebaseProvider from "@/components/wrappers/FirebaseProvider";

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </FirebaseProvider>
  )
}

export default MyApp;
