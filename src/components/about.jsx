
import React from 'react';

const About = () => {
  const styles = {
    section: {
      padding: '64px 0',
      backgroundColor: '#1a202c'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      marginBottom: '32px'
    },
    paragraph: {
      color: 'white',
      textAlign: 'center',
      maxWidth: '768px',
      margin: '0 auto',
      fontSize: '1.125rem',
      lineHeight: '1.7'
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>
          I'm the guy working in the shadows, building the systems that run the world. 
          And one day, with AI by my side, I won't just change the game—I'll rewrite it.
        </p>
      </div>
    </section>
  );
};

export default About;