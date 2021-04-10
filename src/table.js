import React from 'react';

const Table = ({cars}) => {
  return (
    <table className='vehicleTable'>
      <thead>
        <tr>
          <th>No.</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
          {(cars.length > 0) ? cars.map((cars, index) => {
            return(
                <tr key={index}>
                    <td>{cars.No}</td>
                    <td>{cars.Make}</td>
                    <td>{cars.Model}</td>
                    <td>{cars.Year}</td>
                    <td>{cars.Price}</td>
                    <td>{cars.Status}</td>
                </tr>
                )
          }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table