
import { Link } from 'react-router-dom';
import '/src/header.css'
const Header = () => {
    return (
        <div>
            <h2>Navabar</h2>
            <nav>
                <span>My Website</span>
                <Link to="/"></Link>
                <Link to="/">Home </Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contoct Us</Link>
                <Link to="/user">Users</Link>
            </nav>
        </div>
    );
};

export default Header;