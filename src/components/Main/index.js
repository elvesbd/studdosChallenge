import CardMain from '../CardMain';
import Footer from '../Footer';
import SideBar from '../SideBar';

import styles from './styles.module.scss';



export default function Main() {
  
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.homeContainer}>
        <section className={styles.mainContainer}>
          <CardMain />
          <Footer />
        </section>
      </div>

      <div className="sidebar-container">
        <SideBar />
      </div>
    </div>
  );
}