import Head from "next/head";
import Image from "next/image";
// import Todolis from "./api/src/components/Counter";
import Form from '../src/components/Form'

import styles from "../styles/Home.module.css";
// import { Provider } from 'react-redux';
// import App from "next/app";
// import {store} from '../src/redux/store'


export default function Home() {
  return(
    <>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <Form/>
    </>
  )
}

 