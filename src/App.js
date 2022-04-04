import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ReviewDetail from './Component/ReviewDetail/ReviewDetail';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<ReviewDetail></ReviewDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
