import { useAuth } from '@/providers/auth-provider'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/molecules/auth-form'

const Auth = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return (
    <div className="flex flex-col justify-center w-full mx-auto space-y-6">
      <AuthForm />
    </div>
  )
}

export default Auth
