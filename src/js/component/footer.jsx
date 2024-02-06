
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 IbrhmAlty. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#65666b',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;