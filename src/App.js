import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './components/Details/Data';
import New from './components/Details/New';
import Update from './components/Details/Update';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Data />} />
    <Route path='/new' element={<New />} />
    <Route path='/update' element={<Update />} />
  </Routes>
  </>
  );
}

export default App;
