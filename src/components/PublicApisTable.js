import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Table, Input } from 'reactstrap';
import { FaCaretLeft, FaCaretRight, FaEye } from 'react-icons/fa';

function PublicApisTable(props) {
  const { publicApis } = props;
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'API', // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
      {
        Header: 'Category',
        accessor: 'Category',
      },
      {
        Header: 'Link',
        accessor: 'Link',
        Cell: (props) => {
          const { value } = props;
          return (
            <div className="link-button-cell">
              <Link
                to={{
                  pathname: value,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-button">
                  <FaEye className="link-icon" />
                </div>
              </Link>
            </div>
          );
        },
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    page, // Instead of using 'rows', we'll use page, which has only the rows for the active page
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: publicApis,
      initialState: {
        pageIndex: 0,
        pageSize: 15,
        sortBy: [{ id: 'API', desc: false }],
      },
    },
    useSortBy,
    usePagination,
  );

  return (
    <>
      <Table
        {...getTableProps()}
        striped
        hover
        responsive
        className="public-apis-table"
      >
        <thead className="table-head">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row className="pagination-container">
        <Col xs={12} sm={12} md={4} className="pagination-column">
          <Button
            color=""
            className="app-button"
            block
            size="lg"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <FaCaretLeft size={'1.5rem'} />
          </Button>
        </Col>
        <Col xs={12} sm={12} md={4} className="pagination-column">
          <div className="pagination-info-container">
            Page&nbsp;
            <Input
              type="number"
              className="pagination-input"
              value={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
            <em>&nbsp;of {pageOptions.length}</em>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} className="pagination-column">
          <Button
            color=""
            block
            className="app-button"
            size="lg"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <FaCaretRight size={'1.5rem'} />
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default PublicApisTable;
