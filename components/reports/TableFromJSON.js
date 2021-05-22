import React from 'react';

const TableFromJSON = (props) => {
  let { data } = props;
  const { show, title } = props;
  let header;
  let rows;
  let table;

  function toCapitalizedWords(name) {
    const words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(' ');
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
  // removes id and any other unnecessary columns
  if (data.length) {
    data = data.map(({
      id, group_id, location, what_ever, ...rest
    }) => rest);

    // creates table elements
    try {
      header = Object.keys(data[0]).map((col, idx) => <th key={idx}>{toCapitalizedWords(col)}</th>);
      rows = data.map((row) => Object.values(row).map((cell) => <td key={row.id}>{cell}</td>));
      table = rows.map((row, idx) => <tr key={idx + 1}>{row}</tr>);
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

export default TableFromJSON;
