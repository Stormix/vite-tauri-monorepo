import { User, useCurrentUserQuery, useLogoutMutation } from '@/types/graphql'
import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthProviderState = {
  user: User | null
  loading: boolean
  logout: () => void
}

const initialState: AuthProviderState = {
  user: null,
  loading: false,
  logout: () => {}
}

const AuthProviderContext = createContext<AuthProviderState>(initialState)

export function AuthProvider({ children, ...props }: AuthProviderProps) {
  const navigate = useNavigate()
  const { data, loading } = useCurrentUserQuery({
    onError: () => {
      navigate('/auth')
    }
  })
  const [signOut, { loading: signingOut }] = useLogoutMutation()

  return (
    <AuthProviderContext.Provider
      {...props}
      value={{
        user: data?.currentUser ?? null,
        loading: loading || signingOut,
        logout: () => {
          signOut({
            refetchQueries: ['currentUser']
          })
        }
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthProviderContext)
  if (context === undefined) throw new Error('useAuth must be used within a AuthProvider')
  return context
}
