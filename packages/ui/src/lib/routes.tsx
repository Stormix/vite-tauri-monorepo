import Auth from '@/pages/auth'
import AuthLayout from '@/templates/auth'
import Layout from '@/templates/layout'
import { RouteObject } from 'react-router-dom'
import Home from '../pages/home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ path: '/auth', element: <Auth /> }]
  }
]

export default routes
