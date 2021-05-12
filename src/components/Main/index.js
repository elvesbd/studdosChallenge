import CardMain from '../CardMain';
import Footer from '../Footer';

import './styles.css';

import api from '../../services/api';

import { useEffect, useState } from 'react';


export default function Main() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await api.get('865096e8-cdb8-49d7-b548-6488db4c8129');
      const data = await response.data;
      console.log(data);
      const object = JSON.parse(data);
      console.log(object);
      setData(data);
  })()}, []);
  
  const themeHeader = 'none';

  return (
    <div className="home-container">
      <section className="main-container">
        <CardMain />
        <Footer />
      </section>

      <section className="sidebar-container">
        <div className="header-sidebar">
          <h4>Próximas entregas  {}</h4>
        </div>

        
        <form action="">
          <div className="container">
            <div className="search-input">
              <input className="search" type="text" placeholder="Pesquisar" />
            </div>

            <div className="search-button">
              <button type="submit"><i className="material-icons">search</i></button>
            </div>
          </div>
        </form>

        <header className="headerContainer">
          <div className="headerContent">
            <nav>
              <a href="#" className="active">Novas</a>
              <a href="#">Em andamento</a>
              <a href="#">Finalizadas</a>
            </nav>
          </div>
        </header>

        <div className="card">
          <div className="cardContent">
            <div className="headerCardContent">
              <img src="/clock_small.svg" alt="Clock"/>
              <span>Até {}</span>
            </div>
            <div className="imgCloudChecked">
              <img src="/cloud_checked.svg" alt="Cloud icon"/>
            </div>
          </div>

          <div className="title">
            <span>Lista 03 - Física Moderna - Modulo 1 - Aula 4</span>
          </div>

          <h3>Matemática</h3>

          <div className="footerCard">
            <span>Ricardo</span>
            <span>0/100</span>
          </div>
        </div>

        <div className="card_2">
          <div className="cardContent">
            <div className="headerCardContent" style={{background: themeHeader}}>
              <img src="/clock_small.svg" alt="Clock"/>
              <span>Até 02/06 8h30</span>
            </div>
            <div className="imgCloudChecked">
              <img src="/cloud_checked.svg" alt="Cloud icon"/>
            </div>
          </div>

          <div className="title">
            <span>Lista 03 - Física Moderna - Modulo 1 - Aula 4</span>
          </div>

          <h3>Matemática</h3>

          <div className="footerCard">
            <span>Ricardo</span>
            <span>0/100</span>
          </div>
        </div>

        <div className="card_2">
          <div className="cardContent">
            <div className="headerCardContent" style={{background: themeHeader}}>
              <img src="/clock_small.svg" alt="Clock"/>
              <span>Até 02/06 8h30</span>
            </div>
            <div className="imgCloudChecked">
              <img src="/cloud_checked.svg" alt="Cloud icon"/>
            </div>
          </div>

          <div className="title">
            <span>Lista 03 - Física Moderna - Modulo 1 - Aula 4</span>
          </div>

          <h3>Matemática</h3>

          <div className="footerCard">
            <span>Ricardo</span>
            <span>0/100</span>
          </div>
        </div>

        <div className="card">
          <div className="cardContent">
            <div className="headerCardContent">
              <img src="/clock_small.svg" alt="Clock"/>
              <span>Até 02/06 8h30</span>
            </div>
            <div className="imgCloudChecked">
              <img src="/cloud_checked.svg" alt="Cloud icon"/>
            </div>
          </div>

          <div className="title">
            <span>Lista 03 - Física Moderna - Modulo 1 - Aula 4</span>
          </div>

          <h3>Matemática</h3>

          <div className="footerCard">
            <span>Ricardo</span>
            <span>0/100</span>
          </div>
        </div>
      </section>
    </div>
  );
}