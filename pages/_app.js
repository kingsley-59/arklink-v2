
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
