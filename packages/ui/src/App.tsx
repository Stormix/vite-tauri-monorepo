import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/app.css';
import routes from './lib/routes';
import { ThemeProvider } from './providers/theme-provider';

const router = createBrowserRouter(routes);
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
