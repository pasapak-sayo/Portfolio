import React from 'react';

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: '#1a202c',
      color: 'white',
      padding: '16px 24px',
      position: 'fixed',
      width: '100%',
      zIndex: 10
    },
    navLinks: {
      display: 'flex',
      justifyContent: 'center'
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 16px',
      transition: 'color 0.3s'
    },
    linkHover: {
      color: '#63b3ed'
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLinks}>
        <a href="#hero" style={styles.link} onMouseOver={(e) => e.target.style.color = '#63b3ed'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</a>
        <a href="#about" style={styles.link} onMouseOver={(e) => e.target.style.color = '#63b3ed'} onMouseOut={(e) => e.target.style.color = 'white'}>About</a>
        <a href="#skills" style={styles.link} onMouseOver={(e) => e.target.style.color = '#63b3ed'} onMouseOut={(e) => e.target.style.color = 'white'}>Skills</a>
        <a href="#contact" style={styles.link} onMouseOver={(e) => e.target.style.color = '#63b3ed'} onMouseOut={(e) => e.target.style.color = 'white'}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;