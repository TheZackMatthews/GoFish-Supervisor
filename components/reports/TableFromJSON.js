/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const TableFromJSON = ({ data, show, title }) => {
  let header;
  let rows;
  let table;

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

  function toCapitalizedWords(name) {
    const words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(' ');
  }

  // removes id and any other unnecessary columns
  if (data.length) {
    const newData = data.map(({
      // eslint-disable-next-line camelcase
      id, group_id, location, ...rest
    }) => rest);

    // creates table elements
    try {
      header = Object.keys(newData[0]).map((col, idx) => (
        <th key={`head-${idx}`}>{toCapitalizedWords(col)}</th>
      ));
      rows = newData.map((row) => Object.values(row).map((cell) => <td key={row.id}>{cell}</td>));
      table = rows.map((row, idx) => <tr key={`row-${idx}`}>{row}</tr>);
    } catch (err) {
      console.error(err);
    }
  }

  return header && !show ? (
    <div>
      <h1 className="data-table-title">{title}</h1>
      <table className="data-table">
        <tbody>
          <tr>{header}</tr>
          {table}
        </tbody>
      </table>
    </div>
  ) : (
    <div />
  );
};

TableFromJSON.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default TableFromJSON;
