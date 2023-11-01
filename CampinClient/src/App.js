import './App.css';
import Signup from './pages/Auth/signUpPage'
import Signin from './pages/Auth/LoginScreen'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/index'
import AddReservation from './pages/Reservation/AddReserVation';
import ListReservations from './pages/Reservation/ListReservations';
import AddCamping from './pages/Camping/AddCamping';
import ListCamping from './pages/Camping/ListCamping';
import UpdateCamping from './pages/Camping/UpdateCamping';

function App() {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/Signup' element={<Signup></Signup>} ></Route>
      <Route path='/Signin' element={<Signin></Signin>} ></Route>
      <Route path='/AddReservation' element={<AddReservation></AddReservation>} ></Route>
      <Route path='/AddCamping' element={<AddCamping></AddCamping>} ></Route>
        <Route path='/Campings' element={<ListCamping></ListCamping>} ></Route>
      <Route path='/ListReservations' element={<ListReservations></ListReservations>} ></Route>
      <Route path='/UpdateCamping/:campingId' element={<UpdateCamping></UpdateCamping>} ></Route>
      
    </Routes> 
  
  
  
   </>
  );
}

export default App;
