// Libraries
import AOS from "aos";
import { useEffect } from 'react';

import '../styles/globals.css'
import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.css";
import 'antd/dist/antd.css';

import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      mirror: true
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
