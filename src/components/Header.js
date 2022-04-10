import '../index.css'
import logoTemp from '../assets/HENRY-logos_transparent.png';
import menuIcon from '../assets/menu.png';
import Sidebar from './Sidebar'

function Header(){
    return(
      <div>
        <div className = 'header'>
          <img className = 'logo' src={logoTemp}/>
          <h1 id = 'centerplease'>HENRY</h1>
        </div>

        <div className = 'menu'>
          <button className = 'btn' onClick={Sidebar}>
            <img id = 'menuIcon' src = {menuIcon}/>
          </button>
        </div>
      </div>
    )
};

export default Header;
