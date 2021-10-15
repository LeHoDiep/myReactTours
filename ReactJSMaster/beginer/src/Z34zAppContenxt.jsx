import { useContext } from 'react'
import React from 'react'

const AppContext = React.createContext()

export const useUser = () => useContext(AppContext)

const AppContentProvider = ({ children }) => {
  const user = {
    name: 'Điệp',
    age: 24
  }
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>
}
export default AppContentProvider
