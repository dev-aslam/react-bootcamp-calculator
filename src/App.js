
import './App.css';
import Home from './Home';
import Calculator from './Calculator';
import Todo from './todo';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path='calculator' element={<Calculator/>} />
      <Route path='todo' element={<Todo/>} />
    </Routes>
  );
}

export default App;
