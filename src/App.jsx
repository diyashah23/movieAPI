import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    try{
      const response = await api.get("/api/v1/movies");
      console.log(response.data)
    
      setMovies(response.data)

    } 
    catch(err){
      console.log(err);
    }
  
  }
  useEffect(() => {
getMovies(); 
  },[])

  return (
   
      <Router>
      <Routes>
        {/* <Route path="/" element={<Layout/>}/>
        <Route path="/*" element={<App/>}/> */}
        <Route path="/" element={<Home/>}/>
      </Routes>
      </Router>
     
  )
}

export default App