import '../styles/components/menu.sass';
import { Link } from 'react-router-dom';

const Menu = ({ open, closeMenu }) => {
  console.log(open + ' valor');
  return (
    <nav className={open ? 'navigate open' : 'navigate'}>
      <ul>
        <Link to={'/'} onClick={open ? closeMenu : ''}>
          Home
        </Link>
        <Link to={'/checklists'} onClick={open ? closeMenu : ''}>
          Tasks
        </Link>
        <Link to={'/new'} onClick={open ? closeMenu : ''}>
          Criar Task
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
