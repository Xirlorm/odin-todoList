import { Menu, Moon } from 'react-feather'
import '../App.css'

function Header() {
    return (
        <header>
            <Menu />
            <h1>Just do it.</h1>
            <button id="theme">
                <Moon />
            </button>
        </header>
    )
}

export default Header
