import { Link } from "react-router-dom"

 function Navbar()
{
    return (
        <nav className="navbar">
            <div className="navitems">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/stocks'>Stocks</Link>
            </div>
        </nav>
    )
}
export default Navbar;