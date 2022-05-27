 
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import DeleteUser from './components/DeleteUser/DeleteUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={ <Home></Home>}></Route>
          <Route   path='home' element={ <Home></Home>}></Route>
          <Route path='addUser' element={ <AddUser></AddUser>}></Route>
          <Route path='deleteUser' element={ <DeleteUser></DeleteUser>}></Route>
         

        </Routes>
      </Router>
    </div>
  );
}

export default App;
