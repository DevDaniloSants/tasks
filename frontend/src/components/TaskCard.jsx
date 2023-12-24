import '../styles/components/taskCard.sass';

const TaskCard = () => {
  return (
    <div className="taskCard">
      <div>
        <input type="checkbox" />
        Nome
      </div>
      <button>Remover</button>
    </div>
  );
};

export default TaskCard;
