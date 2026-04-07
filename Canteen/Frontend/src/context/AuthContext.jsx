import { createContext, useContext, useState } from 'react'
import { loginApi, logoutApi } from '../api/auth.api'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })

  const login = async (email, password) => {
    const res = await loginApi({ email, password })
    const userData = res.data.data
    const token = res.data.access_token
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    if (token) localStorage.setItem('access_token', token)
    return userData
  }

  const logout = async () => {
    try {
      await logoutApi()
    } catch {
      // even if backend call fails, clear local state
    }
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('access_token')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
