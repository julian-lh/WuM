
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
import Texts from './Assets/Text'

function App() {

  const content = Texts.texts;
  return (
    <NextUIProvider>
      <NavigationBar />

      <Spacer y={4} />
      <SimulationContainer title={content[0][0]} text={content[0][1]} ><Verdeckung /></SimulationContainer>
      <SimulationContainer title={content[1][0]} text={content[1][1]} ><Schatten /></SimulationContainer>
      <SimulationContainer title={content[2][0]} text={content[2][1]} ><Vertraut /></SimulationContainer>
      <SimulationContainer title={content[3][0]} text={content[3][1]} ><Helligkeit /></SimulationContainer>
      <SimulationContainer title={content[4][0]} text={content[4][1]} ><Textur /></SimulationContainer>
      <SimulationContainer title={content[5][0]} text={content[5][1]} ><Horizont /></SimulationContainer>
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
