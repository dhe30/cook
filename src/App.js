import './index.css'
function App() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            Allergies
          </li>
          <li >
            Cuisine Style
          </li>
          <li >
            Dietary Restrictions
          </li>
        </ul>
      </div>
      <div className="x">
        Definitely not AllRecipes
      </div>
      <input type="text" className="search"/>
    </>
  );
}
  
export default App;