import { useContext, useMemo, useState } from 'react';
import { TasksContext } from '../../App';

import NewTasks from '../NewTasks';
import InProgressTasks from '../InProgressTasks';
import FinishTasks from '../FinishTasks';

import styles from'./styles.module.scss';
import Card from '../Card';


export default function SideBar() {
  const datas = useContext(TasksContext)

  const [selectedComponent, setSelectedComponent] = useState("NewTasks");
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState('');

  
  const lowerSearch = search.toLowerCase();
  setFilteredData(datas.filter((prevState) => prevState.title.toLowerCase().includes(lowerSearch)));
  

  const componentsToSelect = {
    InProgressTasks: <InProgressTasks />,
    NewTasks: <NewTasks />,
    FinishTasks: <FinishTasks />,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.value);
  };
//Fala Elves, tudo bem?
//Nesse caso você teria que criar um novo state, filteredData por exemplo.
//No handleSubmit, você atualiza esse state com os dados filtrados, e é esse state que você utiliza para mostrar os dados na tela. 
//O useMemo no caso, não precisaria existir mais.
//Abraços.

  return (
    <div>
      <section className={styles.sidebarContainer}>
        <div>
          <h4>Próximas entregas</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <div className={styles.searchInput}>
              <input 
                type="text" 
                placeholder="Pesquisar"
                value={search}
                onChange={handleSubmit}
              />
            </div>

            <div className={styles.searchButton}>
              <button type="submit">
                <img 
                  src="/search_icon.svg" 
                  className={styles.materialIcons} 
                  alt="Search button"  
                />
              </button>
            </div>
          </div>
        </form>
        
        <header className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <nav>
              <button 
                onClick={() => {setSelectedComponent("NewTasks")}}
                className={selectedComponent === "NewTasks" ? styles.active: ''}
              >
                Novas
              </button>
              <button 
                onClick={() => {setSelectedComponent("InProgressTasks")}}
                className={selectedComponent === "InProgressTasks" ? styles.active: ''}
              >
                Em andamento
              </button>
              <button 
                onClick={() => {setSelectedComponent("FinishTasks")}}
                className={selectedComponent === "FinishTasks" ? styles.active: ''}
              >
                Finalizadas
              </button>
            </nav>
          </div>
        </header>
          
        {search ? (
          filteredData.map((task, index) => (
            <Card task={task}
              key={index}
              date={task.date}
              title={task.title}
              subject={task.subject}
              teacher={task.teacher}
              questionsCompleted={task.questionsCompleted}
              questions={task.questions}
              type={task.type}
            />
          ))
        ) : (
          componentsToSelect[selectedComponent] 
        )}
      </section>
    </div>
  );
};