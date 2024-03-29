import styles from'./styles.module.scss';


export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.links}>
        <a href="#">Termos de uso</a>
        <a href="#">Política de privacidade</a>
        <a href="#">Blog</a>
        <a href="https://www.android.com/intl/pt-BR_br/" target="_blank" rel="noopener noreferrer">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M3.138.37a.26.26 0 00-.1.035.275.275 0 00-.07.385l.6.884a3.482 3.482 0 00-1.847 2.243h7.685A3.482 3.482 0 007.563 1.67l.6-.884A.275.275 0 008.093.4.288.288 0 007.7.483l-.661.957a4.388 4.388 0 00-2.956 0L3.425.483A.281.281 0 003.138.37zm.9 2.18c.23 0 .417.183.417.41 0 .226-.187.41-.417.41a.413.413 0 01-.417-.41c0-.225.184-.407.412-.41h.005zm3.06 0c.23 0 .417.183.417.41 0 .226-.187.41-.417.41a.413.413 0 01-.417-.41c0-.225.184-.407.412-.41h.005zM.835 4.464a.842.842 0 00-.59.24.814.814 0 00-.245.581v3.827a.828.828 0 001.113.77V4.515a.829.829 0 00-.278-.05zm.835 0v6.015c0 .453.374.82.835.82h6.12c.46 0 .834-.367.835-.82V4.464H1.67zm8.623 0a.828.828 0 00-.278.051v5.366c.255.094.54.058.763-.096a.806.806 0 00.35-.673V5.285a.814.814 0 00-.245-.58.843.843 0 00-.591-.24h.001zm-7.511 7.381v1.094C2.8 13.53 3.292 14 3.894 14c.602 0 1.095-.47 1.113-1.06v-1.095H2.782zm3.338 0v1.094C6.138 13.53 6.63 14 7.232 14c.602 0 1.095-.47 1.113-1.06v-1.095H6.12z" fill="#A7A9AB"
            />
          </svg>
        </a>
        <a href="https://www.apple.com/br/" target="_blank" rel="noopener noreferrer">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M11.694 9.78a9.526 9.526 0 01-.88 1.617c-.572.856-1.38 1.924-2.377 1.931-.888.008-1.117-.569-2.323-.56-1.206.01-1.456.57-2.345.562-1-.009-1.762-.971-2.334-1.826-1.6-2.396-1.77-5.209-.78-6.7A3.552 3.552 0 013.5 3.121c1.06 0 1.725.572 2.6.572.85 0 1.367-.573 2.592-.573A3.478 3.478 0 0111.3 4.472 2.92 2.92 0 009.77 7.25a2.937 2.937 0 001.925 2.53zm-3.93-7.618A2.886 2.886 0 008.424 0a3.232 3.232 0 00-2.073 1.096 2.686 2.686 0 00-.678 2.111 2.716 2.716 0 002.09-1.045z" fill="#A7A9AB"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}