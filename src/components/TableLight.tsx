import React from 'react'
import Table from 'react-bootstrap/Table'

const TableLight = ({ children }: { children: React.ReactNode }) => (
  <Table bordered striped responsive hover>
    {children}
  </Table>
)

export default TableLight
