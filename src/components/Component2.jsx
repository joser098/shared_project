import { NavLink } from "react-router-dom";


const Component2 = () => {
    return (
        <>
            <h2>Componente 2 ⚡</h2>
            <p>Hola Mundo !!!!</p>
            <NavLink to='/'>
                <button>Back ☠</button>
            </NavLink>
        </>
    )
};

export default Component2;