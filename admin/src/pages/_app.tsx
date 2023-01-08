import type { AppProps } from "next/app";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftAppBar from "../components/LeftBar";
import Topbar from "../components/Topbar";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import LoginBox from "../components/LoginBox";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import { Toaster } from "react-hot-toast";
import { GlobalContextProvider } from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  const [accessToken, setAccessToken] = useState<any>(null);
  useEffect(() => {
    if (typeof window != "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      setAccessToken(accessToken);
    }
  }, []);

  return (
    <Provider store={store}>
      <GlobalContextProvider>
        {/* {accessToken ? ( */}
        <div className="customBg h100">
          <Topbar />
          <div className="row">
            <div className=" col-2 customLeftBar">
              <LeftAppBar />
            </div>

            <div className="col-10 right_side_bg">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
        {/* ) : ( */}
        <LoginBox />
        {/* )} */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            className: "hot_toast_style",
          }}
        />
      </GlobalContextProvider>
    </Provider>
  );
}

export default MyApp;
