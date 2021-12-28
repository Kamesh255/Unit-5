import React from 'react';
import './App.css';
import List from "./components/List"
import AnotherList from "./components/AnotherList"

function App() {
  return (
    <div className="App">
       <h1>Mobile Operating System</h1>
       <List />
       <AnotherList />
    </div>
  );
}

export default App;
