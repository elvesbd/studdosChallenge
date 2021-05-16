import { createContext, useEffect, useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import api from './services/api';

import './styles/global.css';

export const TasksContext = createContext([]);

function App() {
  const [datas, setDatas] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await api.get('data');
      setDatas(response.data.entities);
  })()}, []);

  /* function handleDateRefresh(x, y) {
    setDatas((prevState) => [
      ...prevState,
      {
        date: y.prevState.date - x.prevState.date
      }
    ]);
  };
  handleDateRefresh(); */

  return (
    <div className="app-container">
      <TasksContext.Provider value={datas}>
        <Header />
        <Main />
      </TasksContext.Provider>
    </div>
  );
}

export default App;
