import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleDiscount } from '../actions/promo'
import { Row, Col, Button, Collapse, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap'

class PromoCode extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    handleDiscount = (event) => {
      this.props.handleDiscount(event)
    }

    render() {
        return (
            <div>
                <Button variant = "outline-link"
                        style = {{ marginBottom: 11 }}
                        onClick = { () => this.setState({ open: !this.state.open }) }
                >
                    { this.state.open === false ? `Apply` : `Hide` } promo code
                    { this.state.open === false ? ` +` : ` -` }
                </Button>
                <Collapse in = { this.state.open }>
                    <div>
                        <Row className = "show-grid" style = {{ margin: 7 }}>
                          <Col md = {12}>
                            <Form>
                              <FormGroup controlId = "formInlineName">
                                <FormLabel style = {{ marginBottom: 11 }}>Promo Code</FormLabel>
                                <FormControl type = "text"
                                             placeholder = "Enter your promo code"
                                             value = { this.state.coupon }
                                             onChange = { this.props.handleDiscount }
                                             style = {{ marginBottom: 11 }}
                                />
                                <Button variant = "success"
                                        type = "submit"
                                        className = "form-control"
                                        disabled = { this.props.isDisabled }
                                        onClick = { this.props.applyCoupon }
                                >
                                  Apply discount
                                </Button>
                              </FormGroup>
                            </Form>
                          </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  promo: state.promo.coupon
})

export default connect(mapStateToProps, { handleDiscount })(PromoCode)