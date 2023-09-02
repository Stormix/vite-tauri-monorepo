import { Toaster } from '@/components/ui/toaster'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { ReactNode } from 'react'
import { AuthProvider } from './auth-provider'
import { ThemeProvider } from './theme-provider'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include'
})

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
})

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <ApolloProvider client={client}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default Providers
