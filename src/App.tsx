import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'
import { Event } from "./pages/Event"
import { Router } from "./Router"

import { MenuMobileIsVisibleContextProvider } from './contexts/menuMobileIsVisibleContext'

function App() {

  return (
    <ApolloProvider client={client}>
      <MenuMobileIsVisibleContextProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </MenuMobileIsVisibleContextProvider>
    </ApolloProvider>
  )
}

export default App
