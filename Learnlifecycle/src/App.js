// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';


// function App() {
//   const [ data, setData ] = useState({
//     name: '',
//     age: '',
//     address: ''
//   });
//   console.log(data);
  
//   return (
//     <>
//     <input onChange={(e) => {
//       setData({
//         ...data,
//         name:e.target.value
//       })

//     }} />
//     <input onChange={(e) => {
//       setData({
//         ...data,
//         age:e.target.value
//       })

//     }} />
//     <input onChange={(e) => {
//       setData({
//         ...data,
//         address:e.target.value
//       })

//     }} />

//     </>
//   );
// }

// class AppTwo extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: '',
//       age: 0
//     };
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//   }
//   component

//   handleChange = (e) => {
//     // this.setState({
//     //   name: e.target.value
//     // });
//   }
//   handleAgeChange = (e) => {
//     // this.setState({
//     //   age: e.target.value
//     // });
//   }
//   render(){
//     // return(
//     //   <div>
//     //     <input onChange={this.handleChange} />
//     //     <input onChange={this.handleAgeChange} />
//     //     <h1>{this.state.name}</h1>
//     //     <h1>{this.state.age}</h1>
//     //   </div>
//     // );
//   }
// }

// export default App;

// 

// import React, { useCallback, useEffect } from 'react'
// import Input from './Components/input'
// import { useState } from 'react';
// import { getPost } from './Api/Index';

// function App() {

//   const [ input, setInput ] = useState("");
//   const [ toggle, setToggle ] = useState(false);
//   const geApi =()=>{
//     getPost().then(res=>{
//       console.log(res);
//     })
//   }
  
//   useEffect(()=>{
//     getPost()
//     // return ()=>{
//     //   console.log('useEffect return');
//     // }
//   }, [])

//   // const temp = useCallback(
//   //   (e) => {
//   //     setToggle(!toggle)
//   //   },
//   //   [],
//   // )
//   // console.log(input);

//   return (
//     <div>
//       <button onClick={(e) => {
//         // temp()
//       }}>Toggle</button>

//       <Input setTest={setInput}/>
//     </div>
//   )
  
// }

// export default App

import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Input from "./Components/Input";
import { register } from "./Api/firebase";

function App() {
  const [form, setform] = useState({
    email:'',
    password:''
  })

  const registerProgress = () => {
    register(form.email, form.password));
  };

  return (
    <div className="App">
      <button onClick={registerProgress}>register</button>
      <Input press={setForm} />
      <Input press={setForm} />
    </div>
  );
}

export default App;