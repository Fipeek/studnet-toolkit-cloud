import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Note from './components/AboutProject/Note';
import Banner from './components/Banner/Banner';
// #7b2c85 pink
// #d03a8c purple 
const App: React.FC = () => {
  return (
    <div>
      <Header></Header>
      {/* <Note title="test" text="test"></Note> */}
      <Banner></Banner>
    </div>  
  );
}

export default App;
