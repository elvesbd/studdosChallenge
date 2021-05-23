import { createContext, useEffect, useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import { light, dark } from './styles/themes';

import api from './services/api';

import './styles/global.scss';

export const TasksContext = createContext([]);
export const ThemeContext = createContext({});


function App({children}) {
  const [themeName, setThemeName] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
		  if (savedTheme)
			  changeTheme(savedTheme === 'dark')
  }, []);

  useEffect(() => {
    (async () => {
      const response = await api.get('data');
      setDatas(response.data.entities);
  })()}, []);
  
  function changeTheme(themeName)	{
		if (themeName) {
			localStorage.setItem('theme', 'dark')
			setThemeVariables(dark)
			setThemeName(true)
		}	else	{
			localStorage.setItem('theme', 'light')
			setThemeVariables(light)
			setThemeName(false)
		}
	}

  function setThemeVariables(theme)	{	
		document.documentElement.style.setProperty('--black-300', theme.TextColor)
		document.documentElement.style.setProperty('--blue-200', theme.sideBarContainerBackground)
		document.documentElement.style.setProperty('--white-200', theme.inputSearchBackground)
		document.documentElement.style.setProperty('--white-100', theme.bodyBackground)
		document.documentElement.style.setProperty('--gray-300', theme.inputPlaceHolderColor)
		document.documentElement.style.setProperty('--gray-500', theme.footerText)
		document.documentElement.style.setProperty('--gray-400', theme.beforeComponent)
	}

  return (
    <div className="app-container">
      <ThemeContext.Provider value={{themeName, changeTheme}}>
        <TasksContext.Provider value={datas}>
          <Header />
          <Main />
          {children}
        </TasksContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
