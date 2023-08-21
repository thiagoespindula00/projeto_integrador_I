import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>
        <h1>Sistema</h1>
        <nav>
          <ul>
            <li>
              <Link to="usuarios">Usuários</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
