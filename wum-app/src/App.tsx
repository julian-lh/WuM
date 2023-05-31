
import { NextUIProvider } from '@nextui-org/react';
import { NavigationBar } from './Components/NavigationBar';
import { SimulationContainer } from './Components/SimulationContainer';
import Verdeckung from './Simulations/Verdeckung';
import Schatten from './Simulations/Schatten';
import Textur from './Simulations/Textur';
function App() {

  return (
    <NextUIProvider>
      <NavigationBar />

      <SimulationContainer title='Verdeckung und Überlappung' ><Verdeckung /></SimulationContainer>
      <SimulationContainer title='Schatten'><Schatten /></SimulationContainer>
      <SimulationContainer title='Texturdichte-Gradient'><Textur /></SimulationContainer>
    </NextUIProvider>

  );
}

export default App;
