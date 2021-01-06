import Router from 'next/router';
import {ToastContainer} from 'react-toastify';
import NPrograss from 'nprogress';
import 'nprogress/nprogress.css';

import "../../tailwindcss/style.css";
import "react-toastify/dist/ReactToastify.css";

NPrograss.configure({});
Router.events.on("routeChangeStart", () => NPrograss.start());
Router.events.on("routerChangeComplete", () => NPrograss.done());
Router.events.on("routeChangeError",() => NPrograss.done());

function MyApp({ Component, pageProps }) {
  return <> <Component {...pageProps} />
  <ToastContainer position="top-center"></ToastContainer>
  </>
  
}

export default MyApp
