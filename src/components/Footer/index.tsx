// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Library On Hands. Todos os direitos reservados.</p>
    </footer>
  );
};


export default Footer;
