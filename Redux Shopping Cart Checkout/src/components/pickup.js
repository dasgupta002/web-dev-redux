import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

class PickupSavings extends Component {
    render() {
        const tooltip = (props) => (
            <Tooltip id = "tooltip" { ...props }>
                <p style = {{ textAlign: 'justify' }}>
                    Picking up your order in the store helps cut costs,
                    and we pass the savings on to you.
                </p>
            </Tooltip>
        )

        return (
            <Row className = "show-grid">
                <Col md = {6}>
                    <OverlayTrigger placement = "bottom" overlay = { tooltip }>
                        <div style = {{ textDecoration: 'line-through' }}>Pickup savings</div>
                    </OverlayTrigger>
                </Col>
                <Col md = {6} style = {{ color: 'red', fontWeight: 800 }}>{ `$ ${this.props.savings}` }</Col>
            </Row>
        )
    }
}

export default PickupSavings