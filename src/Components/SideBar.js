import React from 'react';
import { BsFillGearFill } from 'react-icons/bs'
import '../App.css';

function SideBar(){

  return(
    <nav className="nav-bar col-xl-2 col-lg-3 col-sm-4">
      <a className="item-nav-bar" href="#"><BsFillGearFill />  Administração</a>
      <a className="item-nav-bar adm-item-nav" href="#">Administradores</a>
      <a className="item-nav-bar adm-item-nav" href="#">Áreas</a>
      <a className="item-nav-bar adm-item-nav" href="#">Locais de Trabalho</a>
      <a className="item-nav-bar adm-item-nav" href="#">Habilidades</a>
      <a className="item-nav-bar adm-item-nav" href="#">Log</a>
      <a className="item-nav-bar adm-item-nav" href="#">Responsáveis</a>
    </nav>
  );
}

export default SideBar;