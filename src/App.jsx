import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Component1 from "./components/component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="jose" element={<Component1 />} />
                <Route path="facu" element={<Component2 />} />
                <Route path="martin" element={<Component3 />} />
                <Route path="roque" element={<Component4 />} />
            </Routes>
        </>
    );
}

export default App;

//comentario dde prueba de maxi
