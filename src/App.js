import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ReviewDetail from './Component/ReviewDetail/ReviewDetail';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<ReviewDetail></ReviewDetail>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
