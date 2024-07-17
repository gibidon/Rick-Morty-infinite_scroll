import { ChangeEvent, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { TUser } from '../contexts/AuthProvider'
import { useNavigate, useLocation } from 'react-router-dom'
import * as styles from './login.module.scss'

export const Login = () => {
  const [login, setLogin] = useState<TUser>('')

  if (login === 'bomb') {
    throw new Error('Bomb!!!')
  }

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/'

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  return (
    <form>
      <h1>Please enter login</h1>
      <label htmlFor="login" />
      <input
        id="login"
        name="login"
        type="text"
        placeholder="enter login"
        className={styles.login_input}
        onChange={handleLoginInput}
      />
      <button
        className={styles.loginBtn}
        onClick={() =>
          auth.signin(login, () => {
            navigate(from, { replace: true })
          })
        }
      >
        Log in
      </button>
    </form>
  )
}
