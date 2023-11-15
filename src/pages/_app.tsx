import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addDataFromLS}
// layout
import Layouts from '@/layouts'
// redux
import { Provider } from 'react-redux';
import { store } from '../store';

export default function App({ Component, pageProps }: AppProps) {
  // on load
  useEffect(()=>{
    console.log("App loaded")
  })
  return (
    <Provider store={store}>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  );
}
