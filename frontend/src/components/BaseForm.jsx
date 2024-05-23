import React from 'react'
import { Button, Row, Col } from 'reactstrap'

function BaseForm() {
  return (
    <Row className='mt-4'>
      <Col md="5" >
        <select className='form-control' >
          <option>I am</option>
        </select>
      </Col>
      <Col md="5" >
        <select className='form-control'>
          <option>I Vote for</option>
        </select>
      </Col>
      <Col md="2" >
 
      <Button type='Submit'>Submit</Button>
      </Col>
    </Row>
  )
}

export default BaseForm
