import { loginSchema } from '@/lib/validation'
import { useLoginMutation } from '@/types/graphql'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useToast } from '../ui/use-toast'

const AuthForm = () => {
  const [login, { loading }] = useLoginMutation()
  const { toast } = useToast()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full mb-12">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={toFormikValidationSchema(loginSchema)}
        onSubmit={(values) => {
          login({
            variables: { email: values.email, password: values.password },
            onCompleted: (data) => {
              if (data.login) {
                toast({
                  title: 'Success!',
                  description: 'You have been logged in'
                })
                navigate('/')
              }
            },
            refetchQueries: ['currentUser'],
            onError: (error) => {
              toast({
                title: 'Error!',
                description: error.message
              })
            }
          })
        }}
      >
        {({ values, setFieldValue, handleBlur, handleSubmit, dirty, errors }) => (
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                name="email"
                className="w-full"
                placeholder="Email"
                onChange={(e) => {
                  setFieldValue('email', e.target.value)
                }}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && <div className="text-xs text-red-500">{errors.email}</div>}
            </div>
            <div className="flex flex-col gap-2">
              <Input
                type="password"
                name="password"
                className="w-full"
                placeholder="Password"
                onChange={(e) => {
                  setFieldValue('password', e.target.value)
                }}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && <div className="text-xs text-red-500">{errors.password}</div>}
            </div>
            <Button type="submit" loading={loading} className="w-full" onClick={() => handleSubmit()} disabled={!dirty}>
              Sign in
            </Button>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default AuthForm
