import React from 'react'
import { Link } from 'react-router-dom'
import NetflixLogo from '../images/NetflixLogo.svg'
export default function Header() {
  return (
    <div className='navbar'>
    <div className="logo" id='logo'><img src={NetflixLogo} alt="" /></div>
      <ul>
        <li className='tabs'><Link className='tabs-link' to="/"><i class="fas fa-home"></i>&nbsp;Home</Link></li>
        <li className='tabs'><Link className='tabs-link' to="/Plan">Plan</Link></li>
      </ul>
    </div>
  )
}
