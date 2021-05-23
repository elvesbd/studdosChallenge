import ToggleButton from '../ToggleButton';

import styles from './styles.module.scss';


export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.contentUser}>
        <img src="/avatar.png" alt="Avatar"/>
        <span>Olá João Paulo</span>
      </div>
      <div className={styles.themeContent}>
        <span>Modo escuro</span>
        <ToggleButton />
      </div>
    </div>
  );
};