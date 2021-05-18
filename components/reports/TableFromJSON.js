import React, { useState } from 'react';

const TableFromJSON = (props) => {
  const [tableReady, setTableReady] = useState(null);
  let { data } = props;
  const { title } = props;
  let header;
  let rows;
  let table;
  console.log('data', data);
  // remove id and any other unnecessary columns
  if (data.length) {
    data = data.map(({
      id, group_id, location, what_ever, ...rest
    }) => rest);

    header = Object.keys(data[0]).map((col, idx) => <th key={idx}>{col}</th>);
    console.log('header', header);
    rows = data.map((row) => Object.values(row).map((cell) => <td key={row.id}>{cell}</td>));
    table = rows.map((row, idx) => <tr key={idx + 1}>{row}</tr>);
  }

  return header ? (
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
