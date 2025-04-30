import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  const styles = {
    app: {
      backgroundColor: '#1a202c',
      minHeight: '100vh',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }
  };

  return (
    <div className="App" style={styles.app}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;