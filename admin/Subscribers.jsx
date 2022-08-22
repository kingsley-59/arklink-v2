import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react'
import FailedToRetrieveData from '../components/FailedToRetrieveData'
import { useTable, usePagination } from 'react-table';

import styled from "styled-components";

const API_URL = process.env.REACT_APP_API_URL;


const COLUMNS = [
  { 
    header: 'Id',
    accessor: 'id',
    Cell: ({value, row}) => {
      return <span>{Number(row.id) + 1}</span>
    }
  },
    {
      header: 'Email',
      accessor: 'email'
    },
    {
      header: 'Date',
      accessor: 'date_added'
    }
]

const DataRow = ({row}) => {

    return (
      <>
      <Tr {...row.getRowProps()}>
        {
          row.cells.map((cell, idx) => {
            return <Td key={idx} {...cell.getCellProps()}>{cell.render('Cell')}</Td>
          })
        }
      </Tr>
      </>
    )
}
  
const SubscribersTable = ({tableName, tableData}) => {
    let columns = useMemo(() => COLUMNS, [])
    let data = useMemo(() => tableData, [])
  
    const { 
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      page, 
      nextPage, 
      previousPage, 
      canNextPage, 
      canPreviousPage, 
      pageOptions, 
      state, 
      gotoPage, 
      pageCount, 
      setPageSize,
      prepareRow 
    } = useTable({
          columns, data,
          initialState: { pageIndex: 0 }
      }, usePagination)
  
  const { pageIndex, pageSize } = state
  
    return (
      <Div>
        <table className='table table-striped table-primary' cellSpacing='0' cellPadding='0' {...getTableProps()}>
          <Thead>
            {
              headerGroups.map((headerGroup, idx) => (
                <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column, idx) => (
                      <Th key={idx} {...column.getHeaderProps()}>{column.render('header')}</Th>
                    ))
                  }
                </Tr>
              ))
            }
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {
              page.map((row, idx) => {
                prepareRow(row)
                return (
                  <DataRow key={idx} row={row} />
                )
              })
            }
          </Tbody>
        </table>
        <Div>
          <PaginationNav className="d-flex justify-content-center align-items-center">
            <button className="shadow-sm" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<'}</button>
            <button className="btn-primary mx-2" onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
            {
              [...Array(pageCount)].map((e, i) => <span onClick={() => gotoPage(i)} className={pageIndex === i ? 'active' : ''} key={i}>{i + 1}</span>)
            }
            <span className="fw-bold mx-2">
                Page {' '} {pageIndex + 1} of {pageOptions.length}
            </span>
            <select className="select" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                    [10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                    ))
                }
            </select>
            
            <button className="btn-primary mx-2" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button className="shadow-sm" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>'}</button>
          </PaginationNav>
        </Div>
      </Div>
    )
}


const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/api/subscribers`)
    .then(({data}) => {
      console.log(data)
      setSubscribers(data)
    })
    .catch(error => {
      console.log(error)
      alert("Something went wrong! Please check your network and try again.")
    })
  }, [])

  return (
    <div className='container p-5'>
      {
        (subscribers?.length > 0) 
        ? <SubscribersTable tableName={'Subscribers Table'} tableData={subscribers} />
        : <FailedToRetrieveData /> 
      }
    </div>
  )
}

export default Subscribers



const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Th = styled.th`
  padding: 15px;
  background-color: #ffffff;
  color: #000070;
`;
const Tr = styled.tr`
  border: none;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  &:nth-child(even) {
    background-color: #eeeeee;
  }
`;
const Td = styled.td`
  border: none;
  padding: 10px;
  color: #000070;
`;
const PaginationNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #000070;
  & > button {
    border: none;
    color: #aeb3cd;
    padding: 8px;
    margin: 0 4px;
    background-color: #fff;
    border-radius: 8px;
  }
  & .form-control {
    padding: 5px 7px;
    border: 1px solid #aeb3cd;
    color: #aeb3cd;
    margin: 0 2px;
  }
  & span {
    font-weight: 600;
    padding: 5px;
  }
  & span.active {
    background-color: #000070;
    color: #fff;
  }
`;
