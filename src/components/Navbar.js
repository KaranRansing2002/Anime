import React from 'react'
import './navbar.css'
import zoro from './zoro.png'
import {NavItems} from './NavItems'
import minato from './minato-removebg-preview.png'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='logo'>
      <h1  ><Link className='name' to='/'>JISTRANGE</Link></h1>
        <img src={zoro}/>
      </div>
      <ul className='nav-items'>
        {
          NavItems.map((item,index)=>(
            <li key={index} >
              <Link to={item.url} className={item.cName}>{item.title}</Link>
            </li>
          ))
        }
      </ul>
      <img id='minato' src={minato}/>
    </nav>
  )
}

export default Navbar
