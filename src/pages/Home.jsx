import { useNavigate } from "react-router-dom"
import Dropdown from "../components/Dropdown"

const Home = () => {

    const navigate = useNavigate()

    const menuItems = [
        {text: "Alert foo", onClick: () => {alert("foo")}},
        {text: "Home", onClick: () => {navigate("/Home")}}]

    return (
        <>
            <Dropdown menuItems={menuItems}>Menu</Dropdown>
        </>
    )
}

export default Home