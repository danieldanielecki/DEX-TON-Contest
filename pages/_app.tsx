import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeadPage from '../components/HeadPage';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadPage />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
