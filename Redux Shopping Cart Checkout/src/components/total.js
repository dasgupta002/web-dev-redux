import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class EstimatedTotal extends Component {
    render() {
        return (
            <Row className = "show-grid">
                <Col md = {6}><h4>Estimated total</h4></Col>
                <Col md = {6}><h4>{ `$ ${this.props.price}` }</h4></Col>
            </Row>
        )
    }
}

export default EstimatedTotal