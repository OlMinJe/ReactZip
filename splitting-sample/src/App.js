import loadable from '@loadable/component';
import React, { useState } from 'react';
import './App.css';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onclick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onclick} onMouseOver={onMouseOver}>
          헤이~~~~
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
};

export default App;
