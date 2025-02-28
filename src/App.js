// // // import './App.css';
// // // import React, { Component } from 'react'
// // // import NavBar from './components/navbar';
// // // import News from './components/News';
// // // import Navbar2 from './components/navbar2';

// // // export default class App extends Component {
// // //   render() {
// // //     return (
// // //       <div>
       
// // //        <NavBar/>
// // //        <News/>
// // //        <Navbar2/>
// // //       </div>
// // //     )
// // //   }
// // // }
// // import React, { useState } from 'react';
// // import './App.css';
// // import NavBar from './components/navbar';
// // import News from './components/News';
// // import Navbar2 from './components/navbar2';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Link
// // } from "react-router-dom";



// // function App() {
// //   const [mode, setMode] = useState('light');

// //   const toggleMode = () => {
// //     if (mode === 'light') {
// //       setMode('dark');
// //       document.body.style.backgroundColor = '#121212';
// //     } else {
// //       setMode('light');
// //       document.body.style.backgroundColor = 'white';
// //     }
// //   }

// //   return (
// //     <div>
// //       <Router>

// //       <NavBar />
// //       <Navbar2  mode={mode} toggleMode={toggleMode}/>
    
// //       {/* <News pageSize={6} country="in" category="sports"/> */}
// //       <Routes>
// //           <Route path="/"> <News pageSize={6} country="in" category="general"/></Route>
        
// //         </Routes>
// //       </Router>
      
    
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';
// import './App.css';
// import NavBar from './components/navbar';
// import News from './components/News';
// import Navbar2 from './components/navbar2';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#121212';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }

//   return (
//     <div>
//       <Router>
//         <NavBar />
//         <Navbar2 mode={mode} toggleMode={toggleMode}/>
//         <Routes>
//           <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general"/>}>
//           </Route>
//           <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business"/>}>
//           </Route>
//           <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"/>}>
//           </Route>
//           <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general"/>}>
//           </Route>
//           <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health"/>}>
//           </Route>
//           <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="science"/>}>
//           </Route>
//           <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"/>}>
//           </Route>
//           <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>}>
//           </Route>
//           {/* <Route exact path="/bussiness">
//             <News key="bussiness" pageSize={6} country="in" category="bussiness"/>
//           </Route>
//           <Route exact path="/entertainment">
//             <News key="entertainment" pageSize={6} country="in" category="entertainment"/>
//           </Route>
        
//           <Route exact path="/health">
//             <News key="health" pageSize={6} country="in" category="health"/>
//           </Route>
//           <Route exact path="/science">
//             <News key="science" pageSize={6} country="in" category="science"/>
//           </Route>
//           <Route exact path="/sports">
//             <News key="sports" pageSize={6} country="in" category="sports"/>
//           </Route>
//           <Route exact path="/technology">
//             <News key="technology" pageSize={6} country="in" category="technology"/>
//           </Route> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import News from './components/News';
import Navbar2 from './components/navbar2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
  }

  return (
    <div>
      <Router>
        <NavBar />
        <Navbar2 mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general"/>} />
          <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
          <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general"/>} />
          <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health"/>} />
          <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
