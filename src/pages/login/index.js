import NavbarLogin from '../../components/Login/navbar'
import SingInForm from '../../components/Login/singInForm'

export default function LoginPage() {
  return (
    <>
      <div className="h-screen bg-slate-100">
        <NavbarLogin />
        <div className="flex justify-center items-center ">
          <div className="max-w-sm block w-full rounded p-5 mt-24 border bg-white border-slate-600">
            <div>
              <h1 className="text-2xl font-bold text-center mb-7 mt-3">
                Iniciar sesión
              </h1>
            </div>
            <div className="w-full">
              <SingInForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
