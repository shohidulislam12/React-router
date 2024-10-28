import './header.css'
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Navabar</h2>
            <nav>
                <span>My Website</span>
                <NavLink to="/"></NavLink>
                <NavLink to="/">Home </NavLink>
            
                <NavLink to="/user">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contoct Us</NavLink>
             
            </nav>
        </div>
    );
};

export default Header;