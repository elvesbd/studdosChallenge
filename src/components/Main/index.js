import { useContext } from 'react';

import { TasksContext } from '../../App';

import Card from '../Card';
import CardMain from '../CardMain';
import Footer from '../Footer';
import SearchInput from '../SearchInput';

import './styles.css';



export default function Main() {
  const datas = useContext(TasksContext);

  function handleInProgress(status) {
    console.log({status})
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
              <a onClick={() => handleInProgress()} href="#" className="active">Novas</a>
              <a href="#">Em andamento</a>
              <a href="#">Finalizadas</a>
            </nav>
          </div>
        </header>

        {datas.map(data => (
          <Card
            key={data.id}
            date={data.date}
            title={data.title}
            subject={data.subject}
            teacher={data.teacher}
            questionsCompleted={data.questionsCompleted}
            questions={data.questions}
          />
        ))}
      </section>
    </div>
  );
}