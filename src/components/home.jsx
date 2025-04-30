import React from 'react';
import photo from "../Jeype.jpg";

const Home = () => {
  const styles = {
    heroSection: {
      height: '100vh',
      backgroundColor: '#2d3748',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    heroOverlay: {
      textAlign: 'center',
      color: 'white',
      padding: '32px'
    },
    profilePhoto: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '4px solid #4299e1',
      marginBottom: '24px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    tagline: {
      fontSize: '1.25rem',
      marginBottom: '24px',
      color: '#cbd5e0'
    },
    ctaButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      fontWeight: 'bold',
      padding: '8px 24px',
      borderRadius: '9999px',
      textDecoration: 'none',
      transition: 'background-color 0.3s',
      display: 'inline-block'
    }
  };

  return (
    <header id="hero" style={styles.heroSection}>
      <div style={styles.heroOverlay}>
        <img 
          src={photo} 
          alt="John Paul Naynes" 
          style={styles.profilePhoto}
        />
        <h1 style={styles.heading}>John Paul Naynes</h1>
        <p style={styles.tagline}>Genius | Billionaire | Playboy | Philanthropist</p>
        <a 
          href="#contact" 
          style={styles.ctaButton}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2b6cb0'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3182ce'}
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Home;