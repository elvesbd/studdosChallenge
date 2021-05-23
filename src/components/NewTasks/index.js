import { useContext } from 'react';
import { TasksContext } from '../../App';

import Card from '../Card';


export default function NewTasks() {
  const datas = useContext(TasksContext);
  
  const newTasks = datas.filter((prevState) => prevState.questionsCompleted === 0);

  /* const ordersTasks = newTasks.sort((x, y) => {
    let a = new Date(x.date)
    let b = new Date(y.date)
    return b - a;
  }) 
  console.log(ordersTasks) */
  
  return (
    <>
      {newTasks.map((task, index) => (
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