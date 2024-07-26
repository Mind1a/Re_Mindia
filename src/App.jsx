import React, { useState, useEffect } from 'react';
import './App.css';
import CustomPizza from './CustomPizza';

// npx json-server -p 3500 -w data/db.json  - სერვერის გასაშვებად

function App() {
  return (
    <>
      <div>
        <CustomPizza />
      </div>
    </>
  );
}

export default App;
