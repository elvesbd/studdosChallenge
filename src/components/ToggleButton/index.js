import { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from '../../App';

import styles from './styles.module.scss';


export default function ToggleButton() {
  const { themeName, changeTheme } = useContext(ThemeContext)

  return (
    <div>
      {/* <label className="switch">
        <input 
          type="checkbox" 
          checked={theme.themeName}
					onChange={theme.changeTheme}
        />
        <span className="slider round"></span>
      </label> */}

      <Switch
        checked={themeName}
        onChange={changeTheme}
        offColor='#c4c4c4'
        offHandleColor='#ffffff'
        uncheckedIcon={<div style={{color: '#ffffff'}} className={styles.themeIcon}></div>}
        onColor='#339CF7'
        onHandleColor='#ffffff'
        checkedIcon={<div style={{color: '#ffffff'}} className={styles.themeIcon}></div>}
        height={30}
        width={65}
			/>
    </div>
  );
};