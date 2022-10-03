import React, { createContext } from 'react'
import CompA from './CompA'

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <div>
    <FirstName.Provider value={"surya"}>
    <LastName.Provider value={"chapai"}>
      <CompA/>
    </LastName.Provider>
    </FirstName.Provider>
      
    </div>
  )
}
export default App
export {FirstName,LastName};
