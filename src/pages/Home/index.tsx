import React from 'react';
import Header from '../../components/Header';
import './Home.css';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
        <Header />
        <div className="container">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page content.</p>
        </div>
        <Footer />
    </div>
  );
};
export default Home;
