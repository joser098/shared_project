import { NavLink } from "react-router-dom";


const Component1 = () => {
    return (
        <>
            <h2>Componente 1</h2>
            <NavLink to='/'>
                <button>Back</button>
            </NavLink>
        </>
    )
}

export default Component1;