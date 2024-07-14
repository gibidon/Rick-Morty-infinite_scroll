import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSignout = () => {
    auth.signout(() => navigate('/'))
  }

  if (auth.user === null) {
    return <p>You are not logged in..</p>
  }

  return (
    <>
      <p>Your login: {auth.user}</p>
      <p>
        <button onClick={handleSignout}>Log out</button>
      </p>
    </>
  )
}
