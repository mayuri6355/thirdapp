import logo from './logo.svg';
import './App.css';
import mycs from './mycss.module.css';

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <>
        <h1 style={{color:"red"}}>Hello</h1>
        <h1 style={{backgroundColor: "lightblue"}}>Welcome</h1>   
        <h1 style={mystyle}>Creative</h1>
        <div className={mycs.demo}>Hello welcome to cdmi</div>
        <img src={require('./image/1.png')} width={100}></img>
        <img src={require('./image/2.png')} width={100}></img>
        <img src={require('./image/3.png')} width={100}></img>
       <img src={require('./image/4.png')} width={100}></img> 


    </>

  );
}

export default App;
