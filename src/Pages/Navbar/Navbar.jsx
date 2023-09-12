import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img width={'200px'} src={logo} alt="" />
            <div>
                <Link to="/">LEARN</Link>
                <Link to="/orders">INVEST</Link>
                <Link to="/inventory">RAISE CAPITAL</Link>
                <Link to="/about">MARKETPLACE</Link>
                <Link className='scheduleLink' to='/schedule'>Schedule A Demo</Link>
            </div>
        </nav>
    );
};

export default Navbar;