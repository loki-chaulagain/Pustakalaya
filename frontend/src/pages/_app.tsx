import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../redux/store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
