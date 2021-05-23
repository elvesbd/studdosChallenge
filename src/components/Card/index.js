import { DateFormat } from "../../utils/dateFormat";

import styles from './styles.module.scss';


export default function Card(props) {
  return (
    <>
      {props.type === 1 ? (
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.headerCardContent}>
              <img src="/clock_small.svg" alt="Clock"/>
              <span>Até {DateFormat(props.date)}</span>
            </div>
            <div>
              <img src="/cloud_checked.svg" alt="Cloud icon"/>
            </div>
          </div>

          <div className={styles.title}>
            <span>{props.title}</span>
          </div>

          <h3>{props.subject}</h3>

          <div className={styles.footerCard}>
            <span>{props.teacher}</span>
            <span>{props.questionsCompleted}/{props.questions}</span>
          </div>
        </div>
      ) : (
        <div className={styles.card_2}>
          <div className={styles.cardContent}>
            <div className={styles.headerCardContent}>
              <img src="/clock_small.svg" alt="Clock"/>
              <span>Até {DateFormat(props.date)}</span>
            </div>
            <div>
              <img src="/cloud_checked.svg" alt="Cloud icon"/>
            </div>
          </div>

          <div className={styles.title}>
            <span>{props.title}</span>
          </div>

          <h3>{props.subject}</h3>

          <div className={styles.footerCard}>
            <span>{props.teacher}</span>
            <span>{props.questionsCompleted}/{props.questions}</span>
          </div>
        </div>
      )}
    </>
  );
};