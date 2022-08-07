import React from 'react';
import './App.css';

import { ButtonComponent, MyComponent } from 'react-component-library';

function App() {
  return (
  <>
    <MyComponent first='Alex' middle='Andreas' last='Demetriou' />
    <ButtonComponent/>
  </>
  );
}

export default App;
