import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    // const headline = 'Planetas';
    return (
      <>
        <Header />
        <SolarSystem>
          <Title headline="Planetas" />
        </SolarSystem>
        <Missions />
      </>
    );
  }
}

export default App;
