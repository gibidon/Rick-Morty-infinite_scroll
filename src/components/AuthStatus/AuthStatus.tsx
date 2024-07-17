import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import * as styles from './authStatus.module.scss'

export const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSignout = () => {
    auth.signout(() => navigate('/'))
  }

  if (auth.user === null) {
    return ''
  }

  return (
    <>
      <p className={styles.login}>Your login: {auth.user}</p>
      <p>
        <button className={styles.logoutBtn} onClick={handleSignout}>
          Log out
        </button>
      </p>
    </>
  )
}
