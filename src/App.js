import React from 'react';
import './App.css';
import Restaurant from './MyComponents/Restaurant.js';

const App = () => {

  return (
    <div className="App">
   
   {/* This is the main component  */}
    <Restaurant/> 
    
    </div>
  );

}

//new component
const MyComponent1 = () => {
 
   return (<p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>);
  
}

const MyComponent2 = () => {
 
  return <p>1234567891011121314151617181920</p>
 
}


/*
var x=5.6;
const myArray= ['kanika','kamlesh','atharava'];
const myList= myArray.map((item) => <p>{item}</p>);

function calculate(a,b){
  const addi=a+b;
  const subt=a-b;
  const mul=a*b
  const divi=a/b;
  return [addi,subt,mul,divi];
}
const [p,q,r,s]=calculate(20,2); //destructuring arrays, the order that variables are declared is important

function App() {
  return (
    <div className="App">
      
       <header className="App-header">

       <h1> Hello World {x} </h1>
      {[p,q,r,s]}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>
  );
}
*/
export default App;
