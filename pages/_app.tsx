import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux";
import { Session } from "../components/Session";
import { Modal } from "../components/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Session>
        <Component {...pageProps} />
        <Modal />
      </Session>
    </Provider>
  );
}

export default MyApp;
