import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Container = ({ children }) => (
  <>
    <div className="container">
      <Navbar />
      <div className="childContainer">
        {children}
      </div>
    </div>
  </>
);

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
