import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/app.css'
import LoadingSpinner from './components/ui/loading-spinner'
import routes from './lib/routes'

const router = createBrowserRouter(routes)

const App = () => {
  return <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
}

export default App
