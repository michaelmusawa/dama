import {Link, NavLink} from 'react-router-dom'
import { LiaBarsSolid } from "react-icons/lia";
import { MdClose } from "react-icons/md";
import { useState } from 'react';

import './navbar.css';
import Logo from '../images/logo.png';
import {links} from '../data';

function Navbar() {

    const [isNavShowing, setIsNavShowing] = useState(false); 
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'onClick={() => isNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => { 
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}
                                onClick={()=> setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
 
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdClose /> : <LiaBarsSolid />
                }

            </button>

        </div>
    </nav>
  )
}

export default Navbar