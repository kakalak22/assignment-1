import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import * as Actions from "./actionsTypes";
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: Actions.DANH_SACH_SAN_PHAM
    });
    dispatch({
      type: Actions.DANH_SACH_DON_HANG
    })
  }, [])

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
