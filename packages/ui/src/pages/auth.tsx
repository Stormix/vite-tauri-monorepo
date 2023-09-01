import AuthForm from '../components/molecules/auth-form';
import AuthLayout from '../templates/auth';

const Auth = () => {
  return (
    <AuthLayout>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <AuthForm />
      </div>
    </AuthLayout>
  );
};

export default Auth;
