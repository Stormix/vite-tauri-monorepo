import { Formik } from 'formik';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
const AuthForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full mb-12">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue, handleBlur, handleSubmit, dirty }) => (
          <div className="flex flex-col items-center  gap-4 justify-start">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setFieldValue('email', e.target.value);
              }}
              onBlur={handleBlur}
              value={values.email}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setFieldValue('password', e.target.value);
              }}
              onBlur={handleBlur}
              value={values.password}
            />

            <Button className="w-full" onClick={() => handleSubmit} disabled={!dirty}>
              Submit
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
