import styles from './styles.module.scss';


export default function InputSearch() {
  return (
  <form action="">
    <div className={styles.container}>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Pesquisar" />
      </div>

      <div className={styles.searchButton}>
        <button type="submit"><img src="/search_icon.svg"className={styles.materialIcons}></img></button>
      </div>
    </div>
  </form>
  );
};


