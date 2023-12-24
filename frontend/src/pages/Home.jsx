import '../styles/pages/home.sass';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>
        My<span>Tasks</span>
      </h1>
      <Link to={'/new'}>
        <button className="btn">Criar Tarefa</button>
      </Link>
    </div>
  );
};

export default Home;
