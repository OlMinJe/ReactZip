import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const onToggle = () => {
    setSearchParams({ detail: detail === 'true' ? false : true });
  };

  return (
    <>
      <h1>소개</h1>
      <p>리액트 라우터를 연습해보는 프로젝트</p>
      <p>detail 값은 {detail}로 설정함</p>
      <button onClick={onToggle}>detail 값 바꾸기</button>
    </>
  );
};

export default About;
