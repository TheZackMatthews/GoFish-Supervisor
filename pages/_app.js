import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import AuthProvider from '../auth'
import Navbar from '../components/layout/Navbar'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <AuthProvider>
        <>
        <Navbar />
        <Component {...pageProps} />
        </>
      </AuthProvider>
    </Provider>
  )
}
