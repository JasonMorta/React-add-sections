
import { createContext, useState } from 'react'
import App from './App'


export const GlobalState = createContext();

export default function State() {

    const [state, setState] = useState({
        name: "useContext💕",
        language: "JavaScript",
        age: 10,
        other: ["React", "useState", "createContext"],
        sections:[] 
      });


  return (
    <GlobalState.Provider value={{state, setState}}>
      <App />
    </GlobalState.Provider>
   
  )
}
