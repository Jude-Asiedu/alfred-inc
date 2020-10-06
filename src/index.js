import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*class Jell extends React.Component{
  render(){
    
  return <h1>Jell  world.</h1>;
  }
}
const el = <Jell />
ReactDOM.render(el,document.getElementById('toor'));
*/

function Jello(props){
  //return  <h1> Hey squad ,{props.name} ,is new here lets welcome him</h1>;
   return <div className="item">
    <b> Name :</b>{props.name}<p/>   
    <b>Price:</b> {props.price}<hr/> 
  </div>;
}


/*const le = <Jello  name = "Dave "/>;
ReactDOM.render(le, document.getElementById('root') );
*/


function Cashreg() {
  return <div>
<Jello name = "Macro" price = "2.55"/>
<Jello name = "Mocro" price = "3.55"/>
<Jello name = "Micro" price = "4.55"/>
<Jello name = "Mecro" price = "5.55"/>

  </div>
}

const lele = <Cashreg />
ReactDOM.render(lele,document.getElementById('root'))




/*let counter = 0;

function show(){
  counter ++;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el,document.getElementById('root')
  );
}

setInterval(show,1000);*/

/*
ReactDOM.render(
  <h3> He fam</h3>,
  
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
