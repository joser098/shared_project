import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Component1 from './components/component1';
import Component2 from './components/Component2';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='jose' element={<Component1/>} />
        <Route path='facu' element={<Component2/>} />
        <Route path='roque' element={<Component3/>} />
      </Routes>
    </>
  )
}

export default App

//comentario dde prueba de maxi