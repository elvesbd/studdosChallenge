import { useContext } from 'react';
import { TasksContext } from '../../App';

import Card from '../Card';


export default function FinishTasks() {
  const datas = useContext(TasksContext);
  
  const Tasks = datas.filter((prevState) => 
    prevState.questionsCompleted === prevState.questions);

  const FinishTasks = Tasks.sort(function (x, y) {
    let a = new Date(x.date);
    let b = new Date(y.date);
    return a - b;
  })
 
  return (
    <>
      {FinishTasks.map((task, index) => (
        <Card
          key={index}
          date={task.date}
          title={task.title}
          subject={task.subject}
          teacher={task.teacher}
          questionsCompleted={task.questionsCompleted}
          questions={task.questions}
          type={task.type}
        />
      ))}
    </>  
  );
};