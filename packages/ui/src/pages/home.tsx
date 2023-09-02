import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/auth-provider'

const Home = () => {
  const { logout, loading } = useAuth()
  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => logout()} loading={loading}>
        Log out
      </Button>
    </>
  )
}

export default Home
