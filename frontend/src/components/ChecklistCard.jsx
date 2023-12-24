import '../styles/components/checklistCard.sass';
import { Link } from 'react-router-dom';

const ChecklistCard = ({ title, tasks, id }) => {
  return (
    <div className="card" id="1">
      <h2>{title}</h2>
      <span>{tasks.length} Tarefas</span>
      <div>
        <Link to={`/checklists/${id}`}>ver</Link>
        <button>Editar</button>
        <button>Deletar</button>
      </div>
    </div>
  );
};

export default ChecklistCard;
