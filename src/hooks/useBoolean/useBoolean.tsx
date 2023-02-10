import { useCallback, useState } from 'react';

const useBoolean = (initial?: boolean) => {
  const [state, setState] = useState(initial);
  const handleToggle = useCallback(() => {
    setState((state) => !state);
  }, []);
  const handleTrue = useCallback(() => {
    setState(true);
  }, []);
  const handleFalse = useCallback(() => {
    setState(false);
  }, []);
  return { state, setState, handleFalse, handleToggle, handleTrue };
};

export default useBoolean;
