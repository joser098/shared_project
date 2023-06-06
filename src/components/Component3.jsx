import { NavLink } from "react-router-dom";


const Component3 = () => {
    return (
        <>
            <h2>Componente Martin</h2>

            <p>Este es mi componente de Martin </p>

            <NavLink to='/'>
                <button>Back</button>
            </NavLink>
        </>
    )
}

export default Component3;