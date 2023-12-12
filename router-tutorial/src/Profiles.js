import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profiles = () => {
  return (
    <>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/sunna">sunna</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Profiles;
