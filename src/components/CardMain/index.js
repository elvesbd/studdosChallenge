import styles from './styles.module.scss';


export default function CardMain() {
  return (
    <div className={styles.content}>
      <img src="/list1.png" alt="Tarefas e materiais"/>
      <img src="/list2.png" alt="Provas e simulados"/>
      <img src="/list3.png" alt="Apostilas"/>
      <img src="/list4.png" alt="Meus treinos"/>
    </div>
  );
};