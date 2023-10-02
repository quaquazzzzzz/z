import { useClient } from '@react/server';

function MyApp({ Component, pageProps }) {
  useClient(); // Markiere die Haupt-App-Komponente als Client-Komponente
  return <Component {...pageProps} />;
}

export default MyApp;