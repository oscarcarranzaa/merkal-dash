import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import EyeSVG from '../icons/eye'
import EyeInvisibleSVG from '../icons/eyeInvisible'
import AccountIcon from '../icons/account'
import axios from 'axios'
import Router from 'next/router'

export default function SingInForm() {
  const [showPass, setShowPass] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const validateEmail = (value) => {
    let error
    const emailStr = value.trim()
    if (!value) {
      error = 'El correo es requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailStr)) {
      error = 'Correo inválido'
    }
    return error
  }
  const validPass = (value) => {
    let error
    if (!value) {
      error = 'La contraseña es requerido'
    } else if (value.length <= 4) {
      error = 'Contraseña muy corta'
    }
    return error
  }
  return (
    <Formik
      initialValues={{
        email: '',
        pass: ''
      }}
      onSubmit={(values) => {
        setLoading(true)
        const { email, pass } = values
        axios
          .post('/login', { email, password: pass }, { withCredentials: true })
          .then((res) => {
            setLoading(false)
            Router.push('/')
            console.log(res.data)
          })
          .catch((err) => {
            const error = err.response.data.response.error
            setLoading(false)
            console.log(err)
            setMessage(error)
          })
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-5">
            <label>
              <div className="w-full">
                <div className="flex items-center relative">
                  <div className="pl-2 absolute">
                    <AccountIcon size={20} />
                  </div>
                  <Field name="email" validate={validateEmail}>
                    {({ field }) => (
                      <>
                        <input
                          {...field}
                          type="text"
                          placeholder="Correo"
                          autoCapitalize="off"
                          autoCorrect="off"
                          autoComplete="off"
                          className={`pl-8 w-full p-2 border rounded ${
                            touched.email && errors.email
                              ? 'border-red-400'
                              : 'border-slate-400 focus:border-sky-600'
                          }`}
                        />
                      </>
                    )}
                  </Field>
                </div>
                <div className="text-sm">
                  <ErrorMessage name="email">
                    {() => <span className="text-red-500">{errors.email}</span>}
                  </ErrorMessage>
                </div>
              </div>
            </label>
          </div>
          <div className="mb-5">
            <div>
              <div className=" flex items-center relative">
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="pl-2 absolute"
                >
                  {showPass ? (
                    <EyeSVG size={20} fill="#000" />
                  ) : (
                    <EyeInvisibleSVG size={20} fill="#000" />
                  )}
                </button>

                <Field validate={validPass} name="pass">
                  {({ field }) => (
                    <>
                      <input
                        {...field}
                        type={showPass ? 'text' : 'password'}
                        placeholder="Contraseña"
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="off"
                        className={`pl-8 w-full p-2 border rounded ${
                          touched.pass && errors.pass
                            ? 'border-red-400'
                            : 'border-slate-400 focus:border-sky-600'
                        }`}
                      />
                    </>
                  )}
                </Field>
              </div>
              <div className="text-sm">
                <ErrorMessage name="pass">
                  {() => <span className="text-red-500">{errors.pass}</span>}
                </ErrorMessage>
              </div>
            </div>
          </div>
          <span>{message}</span>
          <button
            className="w-full bg-black text-white p-2 font-semibold rounded mt-10 hover:bg-black"
            type="submit"
          >
            Entrar
          </button>
        </Form>
      )}
    </Formik>
  )
}
