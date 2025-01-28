
import React from 'react'
import "./App.css";
import { Landingpage } from './pages/Landingpage'
import {Routes,Route} from 'react-router-dom'

 const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element = {  <Landingpage/>}/>
        {/* <Route path="/aboutus" element={<MainBody />} /> */}
      </Routes>
  
    </div>
  )
}
export default App;
