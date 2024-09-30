import React from 'react';
import './Home.css';
import MainLayout from '../../components/Layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
    
      <div className="home-container">
        <h1>Welcome to <strong>RAVEN</strong></h1>
        <p>"O Raven está pronto para alçar voo com você! Organize sua lista de leituras, avalie suas descobertas e compartilhe suas resenhas em uma experiência imersiva que leva a gestão de livros a um novo nível. Voe pelo mundo das palavras!".</p>
      </div>
    
    </MainLayout>
  );
};
export default Home;
