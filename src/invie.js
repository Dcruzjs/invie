import React, { Component } from 'react';
import Portada from './Components/Portada';
import Guitarras from './Components/Guitarras'
import Footer from './Components/Footer'






class App extends Component {
  
  render() {
    return (
      <section className="Invie">
        {/* <Portada menu={data.menu} logo={data.logoPortada}/> */}
        <Portada />
        {/* <Guitarras guitarras={data.guitarras}/> */}
        <Guitarras />
        <Footer />
      </section>
    );
  }
}

export default App;