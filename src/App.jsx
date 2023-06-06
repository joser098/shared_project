import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Component1 from './components/component1';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='jose' element={<Component1/>} />
      </Routes>
    </>
  )
}

export default App
