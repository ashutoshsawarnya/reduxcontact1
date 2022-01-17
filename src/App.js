import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/>}/>
        {console.log("Hello World")}
        
        <Route exact path="/add" element={<AddContact/>}/>
      
        
        <Route exact path="/edit/:id" element={<EditContact/>}/>
         
      
        </Routes>
  
    </div>
  );
}

export default App;
