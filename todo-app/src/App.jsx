import React from 'react';
 import Todo from './components/Todo';
import './app.css'; // Correctly imported

const App = () => {
   console.log("App component mounted"); 
  return (
  <div className="app-container">
    <Todo/>
  </div>
);
};

export default App;
