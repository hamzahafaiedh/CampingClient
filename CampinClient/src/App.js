import './App.css';
import Signup from './pages/Auth/signUpPage'
import Signin from './pages/Auth/LoginScreen'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/index'
import AddReservation from './pages/Reservation/AddReserVation';
import ListReservations from './pages/Reservation/ListReservations';
import AddProgram from './pages/Program/AddProgram';
import ListPrograms from './pages/Program/ListPrograms';
import UpdateProgram from './pages/Program/UpdateProgram';

function App() {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/Signup' element={<Signup></Signup>} ></Route>
      <Route path='/Signin' element={<Signin></Signin>} ></Route>
      <Route path='/AddReservation' element={<AddReservation></AddReservation>} ></Route>
      <Route path='/ListReservations' element={<ListReservations></ListReservations>} ></Route>
      <Route path='/AddProgram' element={<AddProgram></AddProgram>} ></Route>
      <Route path='/ListPrograms' element={<ListPrograms></ListPrograms>} ></Route>
      <Route path='/UpdateProgram/:id' element={<UpdateProgram></UpdateProgram>} ></Route>
      
    </Routes> 
  
  
  
   </>
  );
}

export default App;
