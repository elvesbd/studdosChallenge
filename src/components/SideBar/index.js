import { useContext, useRef, useState } from 'react';
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
  const searchInputRef = useRef();  

  const componentsToSelect = {
    InProgressTasks: <InProgressTasks />,
    NewTasks: <NewTasks />,
    FinishTasks: <FinishTasks />,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const lowerSearch = searchInputRef.current.value.toLowerCase();
    const newSearchList = datas.filter((prevState) => prevState.title.toLowerCase().includes(lowerSearch));
    setSearch(newSearchList);
  }

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
                ref={searchInputRef}
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
          search.map((task, index) => (
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