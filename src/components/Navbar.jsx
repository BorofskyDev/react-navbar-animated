import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

    // Set your classes 
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle the menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu visible')
        }
        setIsMenuClicked(!isMenuClicked)
    }

  return (
    <div style={{width: '100%', height: '100vh'}}>
        <nav>
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
        </nav>
        <div className={menuClass}></div>
    </div>
  )
}

export default Navbar