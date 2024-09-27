import React from 'react';
import './Header.css'; // Importar o arquivo CSS para estilizar o Header

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Library On Hands</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#books">Books</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

