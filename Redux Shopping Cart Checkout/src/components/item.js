import React, { Component } from 'react'
import { Button, Collapse, Row, Col } from 'react-bootstrap'

class ItemDetails extends Component {
   constructor(props) {
       super(props)

       this.state = {
           open: false
       }
   }

    render() {
        return (
            <div>
                <Button variant = "outline-link"
                        style = {{ marginBottom: 11 }}
                        onClick = { () => this.setState({ open: !this.state.open }) }
                >
                    { this.state.open === false ? `See` : `Hide` } item details
                    { this.state.open === false ? ` +` : ` -` }
                </Button>
                <Collapse in = { this.state.open }>
                    <div>
                        <Row className = "show-grid" style = {{ border:'0.3px solid', margin: 4 }}>
                            <Col md = {6}>
                                <img src = "https://bit.ly/3yQn9K4"  style = {{ padding: 22 }} width = {150} height = {200} />
                            </Col>
                            <Col md = {6}>
                                <p style = {{ padding: 22, textAlign: 'justify' }}>Essentials by OFM ESS-3085 Racing style leather gaming chair (blue) </p>
                            </Col>
                            <Col md = {6} style = {{ paddingLeft: 47, paddingBottom: 14 }}>
                                <strong>{ `$ ${this.props.cost}` }</strong>
                                <br />
                                <strong className = "price-strike">{ `$ ${this.props.cost}` }</strong>
                            </Col>
                            <Col md = {6}>Quantity: 1</Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default ItemDetails