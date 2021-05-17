import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import AuthProvider from '../auth';
import Navbar from '../components/layout/Navbar';
import Container from '../components/layout/Container';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </AuthProvider>
    </Provider>
  );
}
