import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
import { store } from "../redux/store/store";
import { Provider } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "hot_toast_style",
        }}
      />
    </Provider>
  );
}

export default MyApp;
