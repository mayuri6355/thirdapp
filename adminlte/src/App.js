import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Menu from './Component/Menu';
import Dashboard from './Component/Dashboard';
import Footer from './Component/Footer';
import Setting from './Component/Setting';

function App() {
  return (
    <div className="wrapper">
   <Navbar/>
   <Menu/>
    <Dashboard/>
   {/* <Setting/>
   <Footer/>  */}

    </div>
  );
}

export default App;
