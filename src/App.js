import React from 'react';
import DayPlan from './components/DayPlan.jsx';
import Header from './components/Header';
import './styles.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <DayPlan />
      </main>
    </div>
  );
}

export default App;


