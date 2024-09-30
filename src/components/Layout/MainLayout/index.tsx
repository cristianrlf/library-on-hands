import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './MainLayout.css';


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className='main-content'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;  