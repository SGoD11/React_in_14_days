import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 mt-4">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
