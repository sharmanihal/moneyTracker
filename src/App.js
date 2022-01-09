import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';


import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {

  const {authIsReady,user}=useAuthContext()
  
  return (
    <div className="App" >
      { authIsReady && (
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={
          !user?<Navigate to="/login" />:<Home/>}>
        </Route>

        <Route path='/login' element={
          user?<Navigate to="/" />:<Login/>}>
        </Route>


        <Route path='/signup' element={
          user?<Navigate to="/" />:<Signup/>}
        ></Route>


        <Route path='*' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>)}
    </div>
  );
}

export default App
