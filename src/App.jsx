import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Project from './pages/project';
import './assets/css/App.css'
import Produts from './pages/products';
import Stagaire from './pages/Stagaire';
import Livres from './pages/Livres';
import Layout2 from './pages/Layout2';
import { Provider } from 'react-redux'
import store from './store/normalstore';

/* l'exam dans pages/produts */

function App() {

  

  return (






    <Provider store={store}>

<BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>

      <Route index element={<Home/>}></Route>

      <Route path='/project' element={<Project id={1} />}></Route>

      <Route path='/products' element={<Produts/>}></Route>

      <Route path='/stagaire' element={<Stagaire/>}></Route>


      <Route path='/livres' element={<Livres/>}></Route>



      </Route>
        
      </Routes>
      </BrowserRouter>

    </Provider>
   
  )
}

export default App
