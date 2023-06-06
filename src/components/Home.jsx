import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>React Project</h1>

            <NavLink to='jose'>
                <button>1</button>
            </NavLink>
            <NavLink to='facu'>
            <button>2 F</button>
            </NavLink>
            <NavLink to='roque'>
            <button>to roque</button>
            </NavLink>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
        </>
    )
}

export default Home;