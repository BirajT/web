import RegisterForm from '@/app/components/forms/register.forms'

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="border p-6 rounded-lg shadow w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          Register
        </h1>
        <RegisterForm />
      </div>
    </main>
  )
}

export default RegisterPage
