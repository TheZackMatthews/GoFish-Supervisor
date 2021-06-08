import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Total = ({
  label,
  count,
  comment,
  circleColor,
}) => {
  const initial = (window.innerWidth / 5) - 115;
  const [cirWidth, setCirWidth] = useState(initial);

  window.addEventListener('resize', () => {
    setCirWidth((window.innerWidth / 5) - 120);
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ marginBottom: 5 }}>{label}</h3>
      <div style={{
        display: 'flex',
        borderRadius: 100,
        border: `9px solid ${circleColor}`,
        borderColor: circleColor,
        width: cirWidth,
        height: cirWidth,
        margin: 'auto',
      }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ color: 'grey' }}>{count}</h2>
        </div>
      </div>
      <div
        style={{
          marginTop: 10,
        }}
      >
        {comment}
      </div>
    </div>
  );
};

Total.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  comment: PropTypes.string,
  circleColor: PropTypes.string,
};

Total.defaultProps = {
  comment: '',
  circleColor: 'blue',
};

export default Total;
