import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import {RecoilRoot} from "recoil";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <RecoilRoot>
    <Head>
      <title> CodeAce </title>
      <meta name = 'viewport' content= 'width=device-width, initial-scale=1' />
      <link rel= 'icon' href = '/favicon.jpg' />
      <meta name = 'description'  content= 'Web application that contains DSA problems and video solutions' />

       </Head>
       <ToastContainer />
       
<Component {...pageProps} />;
    </RecoilRoot>
  );
  }
