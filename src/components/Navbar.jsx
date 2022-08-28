import { useNavigate } from "react-router-dom"
import Dropdown from "./Dropdown"


const Navbar = () => {

    const navigate = useNavigate()

    const menuItems = [
        {text: "Alert foo", onClick: () => {alert("foo")}},
        {text: "Home", onClick: () => {navigate("/Home")}}]

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-content">
                        <h1 className="logo">LOGO</h1>
                        <nav className="nav">
                            <li><Dropdown menuItems={menuItems} alignment="left">Menu</Dropdown></li>
                        </nav>
                        <div className="header-search">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar