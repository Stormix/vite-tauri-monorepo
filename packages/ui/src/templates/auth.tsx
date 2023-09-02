import Providers from '@/providers'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className="container flex flex-col items-center justify-center w-screen h-screen">
      <Providers>
        <Outlet />
      </Providers>
    </main>
  )
}

export default AuthLayout
