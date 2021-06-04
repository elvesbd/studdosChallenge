import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../App';

import NewTasks from '../NewTasks';
import InProgressTasks from '../InProgressTasks';
import FinishTasks from '../FinishTasks';
import SearchInput from '../SearchInput';

import styles from'./styles.module.scss';
import Card from '../Card';


export default function SideBar() {
  const datas = useContext(TasksContext)

  const [selectedComponent, setSelectedComponent] = useState("NewTasks");
  const[search, setSearch] = useState('');

  const filter = datas.filter((prevState) => prevState.title === search);
  console.log(filter);

  const componentsToSelect = {
    InProgressTasks: <InProgressTasks />,
    NewTasks: <NewTasks />,
    FinishTasks: <FinishTasks />,
  };

  function handleSubmit(e) {
    e.preventDefault();


  };

  return (
    <div className="body-container">
      <section className={styles.sidebarContainer}>
        <div>
          <h4>Próximas entregas</h4>
        </div>

        <SearchInput  
          onSearchInput={(e) => setSearch(e.target.value)}
          onSubmit={handleSubmit}
        />
        
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
          filter.map((task, index) => (
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

//{...(selected && { className: 'selected' })}  color={selected ? '#FAE800' : '#FBFBFB'} 