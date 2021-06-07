import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ label, count, comment }) => (
  <div style={{ textAlign: 'center' }}>
    <h3 style={{ marginBottom: 5 }}>{label}</h3>
    <div style={{
      display: 'flex',
      borderRadius: 100,
      border: '9px solid red',
      width: 145,
      height: 145,
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
        {count}
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

Total.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  comment: PropTypes.string,
};

Total.defaultProps = {
  comment: '',
};

export default Total;
