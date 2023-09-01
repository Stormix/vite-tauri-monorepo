import { Toaster } from '@/components/ui/toaster';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/app.css';
import routes from './lib/routes';
import { ThemeProvider } from './providers/theme-provider';

const router = createBrowserRouter(routes);
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
