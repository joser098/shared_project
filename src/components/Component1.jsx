import { NavLink } from "react-router-dom";


const Component1 = () => {
    return (
        <>
            <h2>Componente J</h2>
            <p>Este es mi componente para practicar git flow</p>
            <NavLink to='/'>
                <button>Back</button>
            </NavLink>
        </>
    )
}

export default Component1;