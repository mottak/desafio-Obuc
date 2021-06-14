import React from 'react';
import '../App.css';

function SideBar(){

  return(
    <nav className="nav-bar">
      <a className="item-nav-bar" href="#">Administração</a>
      <a className="item-nav-bar" href="#">Administradores</a>
      <a className="item-nav-bar" href="#">Áreas</a>
      <a className="item-nav-bar" href="#">Locais de Trabalho</a>
      <a className="item-nav-bar" href="#">Habilidades</a>
      <a className="item-nav-bar" href="#">Log</a>
      <a className="item-nav-bar" href="#">Responsáveis</a>
 
    </nav>
  );
}

export default SideBar;