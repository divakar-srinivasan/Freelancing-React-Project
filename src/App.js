import './App.css';
import {Routes,Route} from "react-router-dom";
import  Home  from './Components/home';
 import Contact from './Components/main';


function App() {
  return (
     <Routes>
      <Route path="/" element={<Contact/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  );
}

export default App;
