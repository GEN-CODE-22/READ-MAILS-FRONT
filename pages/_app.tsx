import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux";
import { Session } from "../components/Session";
import { Modal } from "../components/Modal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <Session>
          <Component {...pageProps} />
          <Modal />
        </Session>
      </Provider>
    </LocalizationProvider>
  );
}

export default MyApp;
