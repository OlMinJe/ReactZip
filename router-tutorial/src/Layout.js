import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header style={{ background: 'skyblue' }}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ background: 'blue' }}>여기는 푸터</footer>
    </>
  );
};

export default Layout;
