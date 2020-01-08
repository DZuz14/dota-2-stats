/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Table from 'react-bootstrap/Table'

/**
 * @interface Props
 */
interface Props {
  children: any
  style?: { [key: string]: any }
}

/**
 * @function TableDark
 */
const TableDark = ({ children, style }: Props) => (
  <Table
    variant="dark"
    size="sm"
    striped
    bordered
    responsive
    hover
    style={style}
  >
    {children}
  </Table>
)

export default TableDark
