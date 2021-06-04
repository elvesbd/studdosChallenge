import styles from './styles.module.scss';


export default function InputSearch(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={styles.container}>
        <div className={styles.searchInput}>
          <input 
            type="text" 
            placeholder="Pesquisar"
            value={props.search} 
            onChange={props.onSearchInput}/>
        </div>

        <div className={styles.searchButton}>
          <button type="submit">
            <img src="/search_icon.svg" className={styles.materialIcons}></img>
          </button>
        </div>
      </div>
    </form>
  );
};


