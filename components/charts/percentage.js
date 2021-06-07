import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'react-circle';

const Percentage = ({
  label,
  count,
  total,
  circleColor,
}) => (
  <>
    <div
      style={{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 700,
        width: '100%',
      }}
    >
      {label}
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <Circle
        progressColor={circleColor}
        animate
        animationDuration="10s"
        size={150}
        progress={Math.round((count / total) * 100)}
        roundedStroke
      />
    </div>
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {`${count} out of ${total} ${label.toLowerCase()}`}
    </div>
  </>
);

Percentage.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  circleColor: PropTypes.string,
};

Percentage.defaultProps = {
  circleColor: 'lightBlue',
};

export default Percentage;
