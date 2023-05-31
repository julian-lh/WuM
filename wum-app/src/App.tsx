
import { NextUIProvider } from '@nextui-org/react';
import { NavigationBar } from './Components/NavigationBar';
import { SimulationContainer } from './Components/SimulationContainer';
import Verdeckung from './Simulations/Verdeckung';

function App() {

  return (
    <NextUIProvider>
      <NavigationBar />

      <SimulationContainer title='Verdeckung und Überlappung' ><Verdeckung /></SimulationContainer>
      <SimulationContainer title='comp 2'><p>test</p></SimulationContainer>
    </NextUIProvider>

  );
}

export default App;
