import React from 'react';

import Layout from './containers/Layout/Layout'
import BurguerBuilder from './containers/BurgerBuilder/BugerBuilder'


function App() {
  return (
    <div>
      <Layout>
        <BurguerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
