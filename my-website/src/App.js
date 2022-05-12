import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Header from './component/Header';
import Slider from './component/Slider';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Blog from './component/Blog';



function App() {

  return (
    <div>
      <Router>

     
    <Header/>
<Switch>
  <Route path="/" exact element={Slider}/>
  <Route path="/blog" exact element={Blog}/>
</Switch>
    </Router>

   
</div>

  );
}
export default App;






