import React from 'react';
import { BsHouseDoor } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import '../App.css';

function Header(){

  return(
    <div className="header-container">
      <div className="header-background">
        <div className="header-wrapper">
          <h3 className="item-container">Controle de locais de trabalho</h3>

          <div className="user-container">
            <BsHouseDoor size={24} />
              <div className="user-container">
              <FaRegUser size={24} />
                <div className="user-item">
                  <p>Usuário</p>
                  <p className="name-user-item">Administrador</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;