import { useContext, useState } from 'react';
import { TasksContext } from '../../App';

export default function InProgressTasks(props) {
  console.log(props);
  const datas = useContext(TasksContext);

  const [inProgress, setInProgress] = useState([]);

  

 

  return (
    <a >Trocar</a>
  );
};