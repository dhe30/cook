import React from 'react';
//import HelloWorld from './HelloWorld';
import './App.css';

function App() {
  const sidebar = document.getElementById("sidebar");
  sidebar.fontFamily="Georgia, serif";
  sidebar.style.height="100%";
  sidebar.style.color="black";
  sidebar.style.backgroundColor="#10ef8a";
  sidebar.style.height="1080px";
  sidebar.style.width="200px";
  sidebar.style.padding="10px";
  sidebar.style.position="fixed"
  sidebar.style.border="solid";
  sidebar.style.fontFamily="Georgia, serif";
  sidebar.style.fontSize="25px";
  sidebar.style.fontWeight="bold";
  const list = document.getElementById("list");
  list.style.padding="12px";
  list.style.fontSize="22px"
  const list2 = document.getElementById("list2");
  list2.style.padding="12px";
  list2.style.fontSize="22px"
  const list3 = document.getElementById("list3");
  list3.style.padding="12px";
  list3.style.fontSize="22px"
  const x = document.getElementById("x");
  x.style.color="black";
  x.style.fontFamily="Georgia, serif"; 
  x.style.textAlign = "center";
  x.style.fontSize= "100px";
  x.style.backgroundColor= "#10ef8a";
  x.style.padding= "30px";
  x.style.fontweight="bold";
  x.style.borderStyle="solid";
  x.style.borderWidth="5px";
  x.style.fontWeight="bold";
  x.style.float="right";
  x.style.width="1630px"
  const search = document.getElementById("search");
  search.style.float="right"
  search.style.width="1675px"
  search.style.fontSize="30px";
  search.style.padding="10px";
  //side bar currently uses lists, will later turn it into a
  return (
    <>
      <div id="sidebar">
        <ul>
          <li id="list">
            Allergies
          </li>
          <li id="list2">
            Cuisine Style
          </li>
          <li id="list3">
            Dietary Restrictions
          </li>
        </ul>
      </div>
      <div id="x">
        Definitely not AllRecipes
      </div>
      <input type="text" id="search"/>
    </>
  );
}
 
export default App;