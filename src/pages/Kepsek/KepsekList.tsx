import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import Alerts from 'react-bootstrap/Alert'

const KepsekList: React.FC = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col sm={2}>
          <List>
            {Array<JSX.Element>(9).fill(<List.Item>Tanggal</List.Item>)}
          </List>
        </Col>
        <Col sm={10}>
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama Guru</th>
                <th>Mapel</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Array<JSX.Element>(9).fill(
                <tr>
                  <td>1</td>
                  <td>Pak Budi</td>
                  <td>PKCS + BKGS</td>
                  <td>
                    <Alerts variant='danger'>Belum</Alerts>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export { KepsekList }
