"use client"

import "./header.scss"

export const handleScroll = (e) => {
  let href = null
  if (typeof e == "string") {
    href = e
  } else {
    e.preventDefault()
    href = e.currentTarget.href
  }
  const targetId = href.split("#")[1]
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

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
            <input id="menu_check" type="text" />
          </label>

          <div className="menu_contents">
            <div
              className="menu_box"
              onClick={() => handleScroll("#hero_section")}
            >
              <h2>Home</h2>
            </div>
            <div
              className="menu_box"
              onClick={() => handleScroll("#about_section")}
            >
              <h2>About</h2>
            </div>
            <div
              className="menu_box"
              onClick={() => handleScroll("#works_section")}
            >
              <h2>Works</h2>
            </div>
            <div
              className="menu_box"
              onClick={() => handleScroll("#experience_section")}
            >
              <h2>Experience</h2>
            </div>
            <div
              className="menu_box"
              onClick={() => handleScroll("#blogs_section")}
            >
              <h2>Blogs</h2>
            </div>
            <div
              className="menu_box"
              onClick={() => handleScroll("#contact_section")}
            >
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
