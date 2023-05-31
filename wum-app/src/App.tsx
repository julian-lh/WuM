
import { NextUIProvider, Spacer, Text } from '@nextui-org/react';
import { NavigationBar } from './Components/NavigationBar';
import { SimulationContainer } from './Components/SimulationContainer';
import Verdeckung from './Simulations/Verdeckung';
import Schatten from './Simulations/Schatten';
import Textur from './Simulations/Textur';
import Vertraut from './Simulations/Vertraut';
import Helligkeit from './Simulations/Helligkeit';
import Horizont from './Simulations/Horizont';
import Impressum from './Components/Impressum';
import Sources from './Components/Sources';


function App() {

  return (
    <NextUIProvider>
      <NavigationBar />

      <Spacer y={4} />
      <SimulationContainer title='Verdeckung und Überlappung' ><Verdeckung /></SimulationContainer>
      <SimulationContainer title='Schatten'><Schatten /></SimulationContainer>
      <SimulationContainer title='Vertraute Größe'><Vertraut /></SimulationContainer>
      <SimulationContainer title='Relative Helligkeit & Perspektivische Unschärfe'><Helligkeit /></SimulationContainer>
      <SimulationContainer title='Texturdichte-Gradient'><Textur /></SimulationContainer>
      <SimulationContainer title='Relative Höhe & Lage zum Horizont'><Horizont /></SimulationContainer>
      <section id='impressum'>
        <Impressum />
      </section>
      <section id='quellen'>
        <Sources />
      </section>
      <Spacer y={3} />
    </NextUIProvider>

  );
}

export default App;
