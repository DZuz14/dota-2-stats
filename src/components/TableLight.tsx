import React from 'react'
import Table from 'react-bootstrap/Table'

const TableDark = ({ children }: { children: React.ReactNode }) => (
  <Table bordered striped responsive hover>
    {children}
  </Table>
)

export default TableDark
