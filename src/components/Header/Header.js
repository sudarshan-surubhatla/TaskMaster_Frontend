import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import "./Header.css"
import logo from './TMlogo.png';
import { useTheme } from '../Theme/Themes.js';
function Header() {
    const { theme } = useTheme();
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);
    console.log("user", user);
    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }
    return (
        <div>
            <nav className='header flex justify-between items-center' id="head" style={{
                background: !token ? 'linear-gradient(133deg, rgba(71,65,132,1) 32%, rgba(171,165,237,1) 97%)' :
                    theme === 'light' ? 'linear-gradient(133deg, rgba(71,65,132,1) 32%, rgba(171,165,237,1) 97%)' :
                        'linear-gradient(133deg, rgb(87, 188, 219) 0%, rgb(59, 62, 154) 80%)'
            }}>
                <div className="logo w-1/4 text-center" style={{ fontSize: "20px" }}>
                    {!token ? (
                        <Link to="/">
                            <img src={logo} style={{ marginLeft: '50px' }} alt="Logo" width="200" height="50" />
                        </Link>
                    ) : <img src={logo} style={{ marginLeft: '50px' }} alt="Logo" width="200" height="50" />}
                </div>
                <div className='flex justify-between'>
                    {
                        token ? (
                            <div className='flex items-center justify-center'>
                                <p className='mr-5 text-white' style={{ fontSize: "24px" }}>Welcome, <span style={{ fontSize: "24px" }} className=' text-xl text-white capitalize'>{user.name}</span></p>
                                <button onClick={logout} style={{ backgroundColor: "rgba(255, 0, 0, 0.7)" }} className="logout mr-4">Logout</button>
                            </div>
                        ) : (
                            <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                                <li>
                                    <NavLink to="/login" >Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" >Register</NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;