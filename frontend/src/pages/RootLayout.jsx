import { Link, Outlet } from 'react-router-dom';
// styles
import '../styles/pages/rootLayout.sass';
// hooks
import { useMenu } from '../hooks/useMenu';
// components
import Menu from '../components/Menu';
import MenuHamburguer from '../components/MenuHamburguer';

const RootLayout = () => {
  const { open, toggleMenu } = useMenu();

  return (
    <>
      <header>
        <Link to={'/'}>
          My<span>Task</span>
        </Link>
        <div>
          <Menu open={open} closeMenu={toggleMenu} />
          <MenuHamburguer openMenu={toggleMenu} open={open} />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>&copy; Todos os direitos reservados - 2023 </footer>
    </>
  );
};

export default RootLayout;
