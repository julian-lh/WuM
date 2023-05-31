import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ThreeJsWindow from './Components/ThreeJsWindow';
import { NextUIProvider, Button, Card, Text } from '@nextui-org/react';
import { NavigationBar } from './Components/NavigationBar';
import { SimulationContainer } from './Components/SimulationContainer';

function App() {
  return (
    <NextUIProvider>
      <NavigationBar />

      <SimulationContainer title='comp 1' />
      <SimulationContainer title='comp 2' />
    </NextUIProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload. Test edit...
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <ThreeJsWindow />
    //   </header>
    // </div>
  );
}

export default App;
