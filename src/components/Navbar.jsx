import {Link, NavLink} from 'react-router-dom'
import {GoSidebarExpand} from 'react-icons/go';


import './navbar.css';
import Logo from '../images/logo.png';
import {links} from '../data';

function Navbar() {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li>
                                <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
 
                    })
                }
            </ul>
            <button className="nav__toggle-btn">
                <GoSidebarExpand/>

            </button>

        </div>
    </nav>
  )
}

export default Navbar