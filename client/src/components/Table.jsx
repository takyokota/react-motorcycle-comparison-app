import React, { Fragment, useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
// import BikeData from './BikeData';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Table = ({ bikeInfoOne, bikeInfoTwo }) => {
  const [bikeDataOne, setBikeDataOne] = useState({});
  const [bikeDataTwo, setBikeDataTwo] = useState({});

  // to fetch data for bike one
  useEffect(() => {
    // console.log(bikeInfoOne);
    if (Object.keys(bikeInfoOne).length === 3 && bikeInfoOne.make !== '' && bikeInfoOne.model !== '' && bikeInfoOne.year !== '') {
      // console.log('fetch one');
      try {
        fetchFromAPI(bikeInfoOne.make, bikeInfoOne.model, bikeInfoOne.year)
          .then((data) => data === undefined ? setBikeDataOne({}) : setBikeDataOne(data))
          .catch((err) => console.error(err));
      } catch (err) {
        console.log(err);
      }
    } else {
      setBikeDataOne({});
    }
  }, [bikeInfoOne, setBikeDataOne]);

  // to fetch data for bike two
  useEffect(() => {
    // console.log(bikeInfoTwo);
    if (Object.keys(bikeInfoTwo).length === 3 && bikeInfoTwo.make !== '' && bikeInfoTwo.model !== '' && bikeInfoTwo.year !== '') {
      // console.log('fetch two');
      try {
        fetchFromAPI(bikeInfoTwo.make, bikeInfoTwo.model, bikeInfoTwo.year)
          .then((data) => data === undefined ? setBikeDataTwo({}) : setBikeDataTwo(data))
          .catch((err) => console.error(err));
      } catch (err) {
        console.log(err);
      }
    } else {
      setBikeDataTwo({});
    }
  }, [bikeInfoTwo, setBikeDataTwo]);

  // config for Header column
  const columns = useMemo(() => [
    {
      Header: '',
      accessor: 'items',
      width: '20vw',
    },
    {
      Header: 'Bike 1',
      accessor: 'bike1',
      width: '40vw',
    },
    {
      Header: 'Bike 2',
      accessor: 'bike2',
      width: '40vw',
    },
  ], []);

  // config for data rows
  const data = useMemo(() => [
    {
      items: 'Make',
      bike1: bikeDataOne.make,
      bike2: bikeDataTwo.make,
    },
    {
      items: 'Year',
      bike1: bikeDataOne.year,
      bike2: bikeDataTwo.year,
    },
    {
      items: 'Model',
      bike1: bikeDataOne.model,
      bike2: bikeDataTwo.model,
    },
    {
      items: 'Power',
      bike1: bikeDataOne.power,
      bike2: bikeDataTwo.power,
    },
    {
      items: 'Torque',
      bike1: bikeDataOne.torque,
      bike2: bikeDataTwo.torque,
    },
    {
      items: 'Fuel Consumption',
      bike1: bikeDataOne.fuel_consumption,
      bike2: bikeDataTwo.fuel_consumption,
    },
    {
      items: 'Total Weight',
      bike1: bikeDataOne.total_weight,
      bike2: bikeDataTwo.total_weight,
    },
    {
      items: 'Fuel Capacity',
      bike1: bikeDataOne.fuel_capacity,
      bike2: bikeDataTwo.fuel_capacity,
    },
  ], [bikeDataOne, bikeDataTwo]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Fragment>
      <table {...getTableProps()} className='table-fixed'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps({
                  style: { width: column.width }
                })}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={
                        index === 0 ? "bg-slate-200 font-bold"
                          : rows[0].cells[index].value === 'Honda' ? "bg-red-200"
                            : rows[0].cells[index].value === 'Kawasaki' ? "bg-green-200"
                              : rows[0].cells[index].value === 'Suzuki' ? "bg-yellow-200"
                                : rows[0].cells[index].value === 'Yamaha' ? "bg-blue-200"
                                  : "bg-violet-200"
                      }
                    >
                      {cell.render('Cell').props.value !== undefined ? cell.render('Cell') : 'N/A'}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;