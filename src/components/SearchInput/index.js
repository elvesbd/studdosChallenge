import './styles.css';


export default function InputSearch() {
  return (
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
  );
};


