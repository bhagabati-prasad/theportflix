"use client"

import "./header.scss"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex h-16 w-full items-center justify-between">
        <div className="brand">
          <span>THE</span>
          <span>PORTFLiX</span>
        </div>
        <div className="nav_menu_btn">
          <label htmlFor="menu_check" className="nav_menu">
            <span className="menu_bar"></span>
            <span className="menu_bar"></span>
            <input id="menu_check" type="checkbox" />
          </label>

          <div className="menu_contents">
            <div className="menu_box">
              <h2>Home</h2>
            </div>
            <div className="menu_box">
              <h2>About</h2>
            </div>
            <div className="menu_box">
              <h2>Works</h2>
            </div>
            <div className="menu_box">
              <h2>Experience</h2>
            </div>
            <div className="menu_box">
              <h2>Blogs</h2>
            </div>
            <div className="menu_box">
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
