import React from 'react';

const TableFromJSON = (props) => {
  const { data } = props;
  console.log('data', data);
  const rows = data.map((row) => Object.values(row).map((cell) => <td>{cell}</td>));
  const header = Object.keys(data[0]).map((col, idx) => <th key={idx}>{col}</th>);
  const table = rows.map((row) => <tr>{row}</tr>);
  console.log('table', table);

  return (
    <div>
      <h1 className="data-table-title">React Dynamic Table</h1>
      <table className="data-table">
        <tbody>
          <tr>{header}</tr>
          {table}
        </tbody>
      </table>
    </div>
  );
};

export default TableFromJSON;
