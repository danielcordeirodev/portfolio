import React from "react";
import Header from './components/header';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
      <p>
        Welcome to my personal page. You can check all my projects below:
      </p>
      <Button variant="primary">Web projects </Button>
    </div>
  );
}

export default App;
