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

      <div className="content row">  
        <SideBar />
        <div className="main-container col-xl-10 col-lg-9 col-sm-8">
          <h5>Locais de Trabalho:</h5>
          <div className="main-container-table">
            <NewWorkPlace />
            <WorkPlaceTable />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default WorkPlace;
