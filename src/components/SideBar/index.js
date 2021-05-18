import { useState } from 'react';

import NewTasks from '../NewTasks'
import InProgressTasks from '../InProgressTasks'
import SearchInput from '../SearchInput';

import './styles.css';


export default function SideBar() {
  const [selectedComponent, setSelectedComponent] = useState("NewTasks");
  const [active, setActive] = useState('');
  
  
   const componentsToSelect = {
    InProgressTasks: <InProgressTasks />,
    NewTasks: <NewTasks />,
    //Finish: <Finish />,
  };

  return (
    <div className="body-container">
      <section className="sidebar-container">
        <div className="header-sidebar">
          <h4>Próximas entregas</h4>
        </div>

        <SearchInput />
        
        <header className="headerContainer">
          <div className="headerContent">
            <nav>
              <button 
                onClick={() => {setSelectedComponent("NewTasks"); setActive('active')}}
                className={active ? "active" : ''}>
                  Novas
              </button>
              <button 
                onClick={() => {setSelectedComponent("InProgressTasks"); setActive()}}
                className={active ? "" : 'active'}>
                  Em andamento
              </button>
              <button>Finalizadas</button>
            </nav>
          </div>
        </header>

        { componentsToSelect[selectedComponent] }

      </section>
    </div>
  );
};