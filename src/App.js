import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Home, Products, ProductDetail } from './components';


/**
 * The main application component.
 * Configures routing using react-router-dom.
 */
const App = () => (
  <div>
    <Router>
      {/* Header component is rendered at the top of the application */}
      <Header />
      <Routes>
        {/* Renders the Home component when the path is '/' */}
        <Route path="/" exact element={<Home />} />
        {/* Renders the Projects component when the path is '/project' */}
        <Route path="/Products" element={<Products />} />
        {/* Renders the ProjectDetail component when the path is '/project-detail/:workId' */}
        {/* :workId is the parameter to the component */}
        <Route
          path="/ProductDetail/:productId"
          exact
          element={<ProductDetail />}
        />
      </Routes>
    </Router>
  </div>
);
export default App;
