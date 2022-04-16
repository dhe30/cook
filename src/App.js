import './index.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MenuDropDown from './components/MenuDropDown'
import MenuItem from './components/MenuDropDown'

function App() {
  return (
    <div className = 'background'>
      <Header/>
      <Sidebar/>
      {/*
      <MenuDropDown>
        <MenuItem icon = ":)"/> !
        <MenuItem icon = ":)"/> !
        <MenuItem icon = ":)"/> !
      </MenuDropDown>
  */}
    </div>
  );
}

export default App;
