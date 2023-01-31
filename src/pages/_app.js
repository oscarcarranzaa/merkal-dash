import '../styles/globals.css'
import axios from 'axios'
import { Provider } from 'react-redux'
import userInformation from 'redux/store'

axios.defaults.baseURL = 'http://localhost:4000/api/v1'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={userInformation}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
