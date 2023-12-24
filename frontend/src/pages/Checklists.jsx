import '../styles/pages/checklists.sass';
import { useChecklists } from '../hooks/useChecklists';
import ChecklistCard from '../components/ChecklistCard';

const Checklists = () => {
  const { checklists } = useChecklists('http://localhost:3000/checklist');

  return (
    <div className="tasks">
      <h1>List</h1>
      <div className="cards">
        {checklists &&
          checklists.map((checklist) => (
            <ChecklistCard
              key={checklist._id}
              title={checklist.name}
              tasks={checklist.tasks}
              id={checklist._id}
            />
          ))}
      </div>
    </div>
  );
};

export default Checklists;
