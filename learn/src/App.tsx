import React from 'react'
import Debouncing from "./components/Debouncing"
import Map from "./components/Map"
import Props from "./components/Props"

const newData = "Hello";

function App() {
  return (
  <>
    <Debouncing/>
    <Map/>

    
    <Props data = {newData}/>


    <Props name = "mohit"/>
    <Props age = "22" />
  </>
  )
}

export default App