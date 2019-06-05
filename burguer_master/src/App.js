import React from 'react';

import Layout from './components/Layout/Layout'
import BurguerBuilder from './containers/BurguerBuilder/BuguerBuilder'


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
