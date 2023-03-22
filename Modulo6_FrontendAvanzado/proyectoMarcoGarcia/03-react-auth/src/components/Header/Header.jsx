import { Link } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'
import './Header.scss'

const Header = () => {
  
  const {isAuth, logout} = AuthContext()
    return (
    <nav className='header'>
        <a to="/" className='header__logo'>LOGO</a>
        <ul className='header__nav-list'>
            <li className='header__list-item'>
                <Link to='/' className='header__item-link header__item-link__is-active'>Home</Link>
            </li>
            <li className='header__list-item'>
                <Link to='/dashboard' className='header__item-link'>Dashboard</Link>
            </li>
            {isAuth
            ?(
                <>
                    <li className='header__list-item'>
                        <Link to='/secret' className='header__item-link'>Secret</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link to='/' className='header__item-link' onClick={logout}>Logout</Link>
                    </li>
                </>
            )
            :
            (
                <>
                    <li className='header__list-item'>
                        <Link to='/signup' className='header__item-link'>Signup</Link>
                    </li>
                </>
            )}
            

        </ul>
    </nav>
  )
}

export default Header