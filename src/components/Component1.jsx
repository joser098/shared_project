import { NavLink } from "react-router-dom";


const Component1 = () => {
    return (
        <>
            <h2>Componente J</h2>

            <p>Este es mi componente para pracicar git flow 👀 </p>
            <p>Ejercicio hola</p>

            <NavLink to='/'>
                <button>Back</button>
            </NavLink>
        </>
    )
}

export default Component1;