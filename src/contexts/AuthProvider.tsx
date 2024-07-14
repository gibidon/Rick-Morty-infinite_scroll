import { createContext, useState } from 'react'

export type TUser = string

interface AuthProviderProps {
  children: React.ReactNode
}

interface IAuthContext {
  user: TUser
  signin: (newUser: TUser, callback: Function) => void
  signout: (callback: Function) => void
}

export const AuthContext = createContext<IAuthContext>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<TUser>(null)

  const signin = (newUser: TUser, callback: Function) => {
    setUser(newUser)
    callback()
  }

  const signout = (callback: Function) => {
    setUser(null)
    callback()
  }

  const contextValue = { user, signin, signout }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
