import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  sunna: {
    name: '이밍',
    description: '리액트 러버',
  },
  gildong: {
    name: '길동이',
    description: '어르신',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <>
      {profile ? (
        <>
          <h3>
            {params.username}({profile.name})
          </h3>
          <p>{profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 사용자입니다.</p>
      )}
    </>
  );
};

export default Profile;
