import React from 'react'
import { Search, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' className='rm-pad'><h2 className='logo'>Read-It</h2></Link>
        <div className="search-bar">
            <input type="text" name='search' placeholder='search' />
            <Search />
        </div>
        <ul>
            <Link to='/shop' className='hover-link'><li>Shop</li></Link>
            <Link to='/categories' className='hover-link'><li>Categories</li></Link>
            <Link to='/account' className='hover-link'>
                <li>
                    <UserRound />
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar