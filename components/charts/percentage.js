import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'react-circle';

const Percentage = ({ label, count, total }) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: 'min-content' }}>
    <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 700 }}>{label}</div>
    <div>
      <Circle
        animate
        animationDuration="10s"
        size={150}
        progress={(count / total) * 100}
        roundedStroke
      />
    </div>
    <div style={{ textAlign: 'center' }}>{`${count} out of ${total} ${label.toLowerCase()}`}</div>
  </div>
);

Percentage.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Percentage;
