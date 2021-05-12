import ToggleButton from '../ToggleButton';

import './styles.css';



export default function Header() {
  return (
    <div className="header-container">
      <div className="content-user">
        <img src="/avatar.png" alt="Avatar"/>
        <span>Olá João Paulo</span>
      </div>
      <div className="theme-content">
        <span>Modo escuro</span>
        <ToggleButton />
      </div>
    </div>
  );
};