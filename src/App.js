import React, { useEffect } from 'react';
import Login from './components/Login';
import { reducerCases } from './utils/Constants';
import { useStateProvider} from './utils/StateProvider'


// Faz a função App retorna Login.jsx
export default function App() {
  const [{token}, dispatch]=useStateProvider()
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
      dispatch({action:reducerCases.SET_TOKEN, token});
    }
  }, [token, dispatch])
  return(
  <div>
    <Login />
  </div>
  );
}