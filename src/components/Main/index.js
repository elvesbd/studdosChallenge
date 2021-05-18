import CardMain from '../CardMain';
import Footer from '../Footer';
import SideBar from '../SideBar';

import './styles.css';



export default function Main() {
  
  return (
    <div className="body-container">
      <div className="home-container">
        <section className="main-container">
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