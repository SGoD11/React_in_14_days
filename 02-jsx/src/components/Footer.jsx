import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 mt-4">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Blog. Made by Subhajit Dhar.</p>
      </div>
    </footer>
  );
};

export default Footer;
