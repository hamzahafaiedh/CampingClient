import './App.css';
import Signup from './pages/Auth/signUpPage'
import Signin from './pages/Auth/LoginScreen'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/index'
import AddReservation from './pages/Reservation/AddReserVation';
import ListReservations from './pages/Reservation/ListReservations';
import AddAvis from './pages/Avis/AddAvis';
import ListAvis from './pages/Avis/ListAvis';
import Updatereview from './pages/Avis/UpdateAvis';

function App() {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/Signup' element={<Signup></Signup>} ></Route>
      <Route path='/Signin' element={<Signin></Signin>} ></Route>
      <Route path='/AddReservation' element={<AddReservation></AddReservation>} ></Route>
      <Route path='/ListReservations' element={<ListReservations></ListReservations>} ></Route>
      <Route path='/AddAvis' element={<AddAvis></AddAvis>} ></Route>
      <Route path='/ListAvis' element={<ListAvis></ListAvis>} ></Route>
      <Route path='/updateavis/:idAvis' element={<Updatereview></Updatereview>} ></Route>
      
    </Routes> 
  
  
  
   </>
  );
}

export default App;
