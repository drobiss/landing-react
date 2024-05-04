import "./Navbar.css"
import links from "../data";
import logo from "../images/Logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true)

  return <nav>
    <div className="navigation">
      <div className="nav-header">
          <img src={logo} alt="" />
          <button onClick={ () => setShowMenu(!showMenu) }>
             <GiHamburgerMenu className="hamburger-icon"/>
          </button>
      </div>
      <div className={`${showMenu ? "nav-list show" : "nav-list hide"} `}>
          <ul>
            {
              links.map( (oneLink) => {
                const {id, text, url} = oneLink

                return <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              })
            }
          </ul>
      </div>
      <div className="buttons-container">
        <button className="btn-sing-in">Sing In</button>
        <button className="btn-sing-up">Sing Up</button>
      </div>
    </div>
  </nav>
    
}

export default Navbar