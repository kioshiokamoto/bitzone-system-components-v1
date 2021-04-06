import Filter from "./components/Filter";
//import {Button} from './components'
import './app.css'
import { useState } from "react";
function App() {



  const [isVisible, setIsVisible] = useState(false)

  return(
    <div className="containerFilter">
      <Filter name="Filtro"  overflow="scroll" isVisible={isVisible} setIsVisible={setIsVisible}>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        <h3>Estado</h3>
        
      </Filter>
     
    </div>
  )


}

export default App;
