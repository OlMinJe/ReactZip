import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // category 값을 URL 파라미터를 통해 사용할 것이므로
  // 1. Categories 컴포넌트에 현재 선택된 카테고리 값을 알려줄 필요 X
  // 2. onSelect 함수로 따로 전달해 줄 필요 X
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
  // ?: category 값이 선택적이다.(있을 수도 있고 없을 수도 있고)
};

export default App;
