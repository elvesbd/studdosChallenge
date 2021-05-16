import { useContext } from 'react';
import { TasksContext } from '../../App';

import Card from '../Card';


export default function InProgressTasks() {
  const datas = useContext(TasksContext);
  
  const newTasks = datas.filter((task) => task.questionsCompleted === 0);
  
  return (
    <>
      {newTasks.map(task => (
        <Card
          key={task.id}
          date={task.date}
          title={task.title}
          subject={task.subject}
          teacher={task.teacher}
          questionsCompleted={task.questionsCompleted}
          questions={task.questions}
        />
      ))};
    </>  
  );
};