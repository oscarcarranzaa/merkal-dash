import '../styles/globals.css'
import axios from 'axios'
import { Provider } from 'react-redux'
import reduxStore from 'redux/store'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/gql'
  })
})

axios.defaults.baseURL = 'http://localhost:4000/api/v1'
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
