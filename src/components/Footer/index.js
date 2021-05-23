import styles from'./styles.module.scss';


export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.links}>
        <a href="#">Termos de uso</a>
        <a href="#">Política de privacidade</a>
        <a href="#">Blog</a>
        <a href=""><img src="/android_icon.svg" alt=""/></a>
        <a href=""><img src="/apple_icon.svg" alt=""/></a>
      </div>
    </div>
  );
}