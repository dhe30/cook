import '../index.css';
import '../styles/MenuDropDown.css';
import './Header.js'

function MenuDropDown(props) {
  return(
    <nav className = "dropdown">
      <ul className = "dropdown-buttons">
        {props.children}
      </ul>
    </nav>
  )
}

function MenuItem(props) {
  return (
    <li className = "dropdown-items">
      <a href = "#" className = "icon-button">
        {props.icon}
      </a>
    </li>
  )
}

export default MenuDropDown;
