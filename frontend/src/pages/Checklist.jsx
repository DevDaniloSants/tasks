import '../styles/pages/checklist.sass';

// hooks
import { useChecklist } from '../hooks/useChecklist';
import { Link, useParams } from 'react-router-dom';

//components
import TaskCard from '../components/TaskCard';

const Checklist = () => {
  const { id } = useParams();
  const { checklist } = useChecklist(`http://localhost:3000/checklist/${id}`);

  return (
    <div className="task">
      <div className="start">
        <h1>{checklist && checklist.name}</h1>
        <div>
          <Link to={'#'}>Nova Tarefa</Link>
          <Link to={'/checklists'}>Voltar</Link>
        </div>
      </div>
      <div className="tasks">
        {checklist && checklist.tasks.length > 0 ? (
          <>
            <TaskCard />
          </>
        ) : (
          <p>
            Você não possui tarefas para{' '}
            <span className="title">{checklist && checklist.name}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Checklist;
