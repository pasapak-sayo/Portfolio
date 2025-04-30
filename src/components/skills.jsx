import React from 'react';

const Skills = () => {
  const styles = {
    section: {
      padding: '64px 0',
      backgroundColor: '#2d3748'
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
      marginBottom: '48px'
    },
    skillsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      maxWidth: '960px',
      margin: '0 auto'
    },
    skillBox: {
      backgroundColor: '#4a5568',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    skillHeading: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#63b3ed',
      marginBottom: '16px'
    },
    list: {
      color: 'white',
      listStylePosition: 'inside',
      paddingLeft: '0'
    },
    listItem: {
      marginBottom: '8px'
    },
    paragraph: {
      color: 'white',
      marginBottom: '8px'
    }
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Skills and Experiences</h2>
        
        <div style={styles.skillsContainer}>
          <div style={styles.skillBox}>
            <h3 style={styles.skillHeading}>Programming Languages</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>Python</li>
              <li style={styles.listItem}>JavaScript</li>
              <li style={styles.listItem}>Java</li>
            </ul>
          </div>
          
          <div style={styles.skillBox}>
            <h3 style={styles.skillHeading}>Web Technologies</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>HTML5</li>
              <li style={styles.listItem}>CSS3</li>
            </ul>
          </div>
          
          <div style={styles.skillBox}>
            <h3 style={styles.skillHeading}>Future Career Goal</h3>
            <li style={styles.paragraph}>Overlord of the Milky Way</li>
            <li style={styles.paragraph}>Destroyer of Worlds</li>
            <li style={styles.paragraph}>Keeper of the Universe</li>
          </div>
          <div style={styles.skillBox}>
            <h3 style={styles.skillHeading}>Miscellaneous</h3>
            <li style={styles.paragraph}>Really Good Gamer</li>
            <li style={styles.paragraph}>Nature Cleaner</li>
            <li style={styles.paragraph}>Trash Remover</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;