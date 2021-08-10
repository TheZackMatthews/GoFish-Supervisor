import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core/';

const InfoCard = ({ children }) => {
  React.useEffect(() => {
    const card = document.getElementsByClassName('card');
    if (card.length) {
      const { height } = card[0].getBoundingClientRect();
      for (let i = 0; i < card.length; i += 1) {
        card[i].style.width = `${height}px`;
        card[i].style.height = `${height}px`;
      }
    }
  }, []);

  return (
    <Card
      className="card"
      style={{
        padding: 25,
        margin: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
        }}
      >
        {children}
      </div>
    </Card>
  );
};

InfoCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoCard;
