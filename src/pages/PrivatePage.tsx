import { useAuth } from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

interface PrivatePageProps {
  children: React.ReactNode
}

export const PrivatePage = ({ children }: PrivatePageProps) => {
  const auth = useAuth()
  const location = useLocation()

  // console.log('###location in private page: ', location)

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return children
}
