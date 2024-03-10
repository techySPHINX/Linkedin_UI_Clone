import React from 'react'
import './HeaderOption.css'

const HeaderOption = ({Icon,title}) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headeroption__icon' />}
    </div>
  )
}

export default HeaderOption