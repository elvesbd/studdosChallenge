import { useContext, useState } from 'react';
import { TasksContext } from '../../App';

import NewTasks from '../NewTasks';
import InProgressTasks from '../InProgressTasks';
import FinishTasks from '../FinishTasks';
import SearchInput from '../SearchInput';

import styles from'./styles.module.scss';


export default function SideBar() {
  const datas = useContext(TasksContext)

  const [searchInput, setSearchInput] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("NewTasks");
  
   const componentsToSelect = {
    InProgressTasks: <InProgressTasks />,
    NewTasks: <NewTasks />,
    FinishTasks: <FinishTasks />,
  };

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  };

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(searchInput);
  };

  return (
    <div className="body-container">
      <section className={styles.sidebarContainer}>
        <div>
          <h4>Próximas entregas</h4>
        </div>

        <SearchInput onSearchInput={handleSearchInput} onSubmit={handleSearchSubmit}/>
        
        <header className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <nav>
              <button 
                onClick={() => {setSelectedComponent("NewTasks")}}
                className={styles.active}
              >
                Novas
              </button>
              <button 
                onClick={() => {setSelectedComponent("InProgressTasks")}}
              >
                Em andamento
              </button>
              <button 
                onClick={() => {setSelectedComponent("FinishTasks")}}
              >
                Finalizadas
              </button>
            </nav>
          </div>
        </header>

        { componentsToSelect[selectedComponent] }

      </section>
    </div>
  );
};

//{...(selected && { className: 'selected' })}  color={selected ? '#FAE800' : '#FBFBFB'} 