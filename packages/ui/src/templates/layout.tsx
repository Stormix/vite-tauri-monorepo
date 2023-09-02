import Providers from '@/providers'
import { useAuth } from '@/providers/auth-provider'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && loading) {
      navigate('/auth')
    }
  }, [user])

  return (
    <Providers>
      <main className="container flex flex-col items-center justify-center w-screen h-screen">
        <Outlet />
      </main>
    </Providers>
  )
}

export default Layout
