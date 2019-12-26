import React from 'react';
import Store from './src/store';
import Route from './src/routes/route';

const App = () => {
  return (
    <Store>
      <Route />
    </Store>
  );
};

export default App;
