/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import AuthProvider from '../auth';
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

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({}),
  }),
};

App.defaultProps = {
  pageProps: {},
};
