import { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps) {
  // 대기 중/완료/실패에 대한 상태관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolves] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolves(resolved);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}
