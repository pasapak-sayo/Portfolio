import React from 'react';

const Contact = () => {
  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '30vh',
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '2rem',
    },
    container: {
      maxWidth: '500px',
      width: '100%',
      backgroundColor: '#2e2e2e',
      padding: '2rem',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    },
    label: {
      fontWeight: 'bold',
    },
    socialLinks: {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    socialButton: {
      padding: '0.5rem 1rem',
      backgroundColor: '#444',
      color: 'white',
      borderRadius: '5px',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    },
    footer: {
      marginTop: '2rem',
      color: '#aaa',
      textAlign: 'center',
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2>Contact Me</h2>

        <div>
          <p><span style={styles.label}>Email:</span> johnnaynes2021@gmail.com</p>
          <p><span style={styles.label}>Phone:</span> (63) 09222185606</p>

          <div style={styles.socialLinks}>
            <a href="https://www.facebook.com/johnpaul.naynes.12" style={styles.socialButton}>
              ⓕ Facebook
            </a>
            <a href="https://github.com/pasapak-sayo" style={styles.socialButton}>
              GitHub
            </a>
            <a href="https://www.instagram.com/hello_my_luna/" style={styles.socialButton}>
              🅾 Instagram
            </a>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2024 John Paul Naynes. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
