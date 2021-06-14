import React from 'react';
import Header from '../Components/Header';
import NewWorkPlace from '../Components/NewWorkPlace';
import SideBar from '../Components/SideBar';
import WorkPlaceTable from '../Components/WorkPlaceTable';
import '../App.css';

function WorkPlace(){
  return(
    <div>
      <Header />
      <div className="container">
        
        <SideBar className="side-bar" />
        <div className="container-func">
          <h2>Locais de Trabalho:</h2>
          <div className="container-func-table">
            <NewWorkPlace />
            <WorkPlaceTable />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default WorkPlace;
