import '../index.css'
import logoTemp from '../assets/HENRY-logos_transparent.png';
function Header(){
    return(
        
            <div className = 'header'>
                <img className = 'logo' src={logoTemp}/>
                <h1 id = 'centerplease'>HENRY</h1>
            </div>
            

    )
};

export default Header;