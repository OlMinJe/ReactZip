import React, { useCallback, useRef, useState } from 'react';
// immer 라이브러리를 사용하여 불변성을 유지하면서 복잡한 구조를 가지고 있는 객체 관리하기
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(produce((draft) => (draft[name] = value)));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      setData(produce((draft) => draft.array.push(info)));
      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    setData();
    produce((draft) =>
      draft.array.splice(
        draft.array.findIndex((info) => info.id === id),
        1
      )
    );
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름" vlaue={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(() => onRemove(info.id))}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
