import { DateFormat } from "../../utils/dateFormat";

import './styles.css';


export default function Card(props) {
  return (
    <div className="card">
      <div className="cardContent">
        <div className="headerCardContent">
          <img src="/clock_small.svg" alt="Clock"/>
          <span>Até {DateFormat(props.date)}</span>
        </div>
        <div className="imgCloudChecked">
          <img src="/cloud_checked.svg" alt="Cloud icon"/>
        </div>
      </div>

      <div className="title">
        <span>{props.title}</span>
      </div>

      <h3>{props.subject}</h3>

      <div className="footerCard">
        <span>{props.teacher}</span>
        <span>{props.questionsCompleted}/{props.questions}</span>
      </div>
    </div>
  );
};