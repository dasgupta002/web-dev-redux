import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class TaxesFees extends Component {
    render() {
        return (
            <Row className = "show-grid">
                <Col md = {6}>Estimated taxes and fees (based on 94085)</Col>
                <Col md = {6}>{ `$ ${this.props.tax}` }</Col>
            </Row>
        )
    }
}

export default TaxesFees