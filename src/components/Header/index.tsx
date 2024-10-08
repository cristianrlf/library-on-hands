import React from 'react';
import './Header.css'; // Importar o arquivo CSS para estilizar o Header

const Header: React.FC = () => {
  return (
    <div className='header-container'>
    <header className="header">
      <div className="header-logo">
        <a href='/'><img src="../../public/assets/logo-raven.svg" alt="Logo" /></a>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#books">Books</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;

