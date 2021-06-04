import React from 'react';

const Total = ({label}) => (
  <div style={{
    display: 'flex',
    alignContent: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 150,
  }}
  >
    <h3>{label}</h3>
    <div style={{
      display: 'flex',
      borderRadius: 100,
      border: '9px solid red',
      width: 145,
      height: 145,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      Hello
    </div>
    More words. More more more
  </div>
);

export default Total;
