import { useState } from 'react';

import CardMain from '../CardMain';
import Footer from '../Footer';
import SearchInput from '../SearchInput';
import InProgressTasks from '../InProgressTasks';
import NewTasks from '../NewTasks';

import './styles.css';



export default function Main() {
  const [selected, setSelected] = useState([]);

  function handleSelectedTasks(e) {
    e.preventDefault();
    
  }

  return (
    <div className="home-container">
      <section className="main-container">
        <CardMain />
        <Footer />
      </section>

      <section className="sidebar-container">
        <div className="header-sidebar">
          <h4>Próximas entregas</h4>
        </div>

        <SearchInput />
        
        <header className="headerContainer">
          <div className="headerContent">
            <nav>
              <a href="" className="active">Novas</a>
              <a href="">Em andamento</a>
              <a href="#">Finalizadas</a>
            </nav>
          </div>
        </header>

        {selected ? (<NewTasks />) : (<InProgressTasks />)}

        {/* {datas.questionsCompleted ? (
          <InProgressTasks />
        ) : (
          <NewTasks />
        )} */}
      </section>
    </div>
  );
}