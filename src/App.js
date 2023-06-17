import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './comp/Home';
import About from './comp/About';
import Service from './comp/Service';
import Contact from './comp/Contact';
import Policy from './comp/Policy';
import Error from './comp/Error';
import List from './comp/List';
import Footer from './comp/Footer';

function App() {
  return (
    <>
      <List/>
      <Routes>

        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/service" Component={Service}/>
        <Route path="/contact" Component={Contact}/>        
        <Route path="/policy" Component={Policy}/>
        <Route component={Error}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App




























// import React from 'react'
// import PostList from './PostList'
// // import Navbar from './component/Navbar'
// // import Header from './component/Header';
// // import FunctionClick from './component/FunctionClick';
// // import StyleSheet from './component/StyleSheet';
// // import Nav from './component/Nav';
// // import { Switch } from '@mui/material';
// // import Home from './component/Home';
// // import About from './component/About';
// // import Contact from './component/Contact';
// // import { BrowserRouter, Route,Routes } from 'react-router-dom';
// // import Nav from './component/Nav';
// function App() {
//   // const click=()=>{
//   //   alert ("Hello ripukesh");
//   // }
//   // const age=(a)=>{
//   //   if(a>8){
//   //     return <span>you are elegable</span>
//   //   } else {
//   //       return <span>you are elegable</span>
//   //   }
//   // }
//   return (
//     <>
      
//         {/* <h1>Hello</h1>
//         <button onClick={()=>click()}>Click</button>
//         {age(18)} */}
//         {/* <Header/>
//         <Header  name="Dipu">
//           <p>dipu is a good boy</p>
//         </Header> */}
//         {/* <FunctionClick/> */}
//         {/* <StyleSheet isvalue={true}/> */}
//       {/* <BrowserRouter>
//         <Nav/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/About" element={<About/>}/>
//           <Route path="/Contact" element={<Contact/>}/>
//         </Routes>
//       </BrowserRouter> */}
//        <PostList/>  

//     </>
//   )
// }

// export default App
