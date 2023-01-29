import './Navbar.jsx';
import Logo from '../images/logo.png';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import { links } from '../data.js';
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
export const Navbar = () => {
    const [isOpen , setOpen] = useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to='/'  className='logo' onClick={() => setOpen(false )}  >
                    <img src={Logo} alt="Nav Logo" />
                </Link>

              
    
                <ul className={`nav__links ${isOpen ? 'show__nav' :'hide__nav'}`}>
                {
                    links.map(({ name, path }, index) =>

                    <li key={index}>
                        <NavLink to={path} end  className={({isActive}) => isActive ? 'active-nav': '' }
                        onClick={() => setOpen(prev => !prev )} 
                        >{name}</NavLink>
                    </li>

                    )
                }
            </ul>
              
                <button className='nav__toggle-btn'  onClick={() => setOpen(prev => !prev )} 
                >
                   {isOpen ?<MdOutlineClose/> : <GoThreeBars/>}
                </button>

            </div>
        </nav>
    )
}
