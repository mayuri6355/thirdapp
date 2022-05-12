import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Component/Header';
import Slider from './Component/Slider';
import Blog from './Component/Blog';

// const blog = [{
//   photo: "img1.avif",
//   text:"MultiMedia Courses"
// },
// {
//   photo: "img2.avif",
//   text:"Progarmming It"
// },
// {
//   photo: "img3.avif",
//   text:"UI/UX & Graphics Desing"
// }
// ]

function App() {
  return (
    <div className="App">
     
      <ResponsiveAppBar/>
      <Slider/>
      <Blog/>
   

  

{/* 
   <div className="posts-container">
   {
      blog.map((item)=>{
          return(
            <Blog photo={item.photo}
            text={item.text}/>
          )
        })
      }
          

 
    </div> */}

    
    </div>


    
  );
}

export default App;
