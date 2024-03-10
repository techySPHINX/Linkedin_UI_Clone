import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
      
       <div className='header_left'>

         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="" />

         <div className="header_search">
            <SearchIcon />
            <input type="text" />
         </div>
       </div>
       <div className="header__right">
          <HeaderOption />
          <HeaderOption />
       </div>
    </div>
  )
}

export default Header;