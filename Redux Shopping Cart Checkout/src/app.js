import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleDiscount } from './actions/promo'
import SubTotal from './components/sub'
import PickupSavings from './components/pickup'
import TaxesFees from './components/tax'
import EstimatedTotal from './components/total'
import ItemDetails from './components/item'
import PromoCode from './components/promo'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 118,
      savings: -3.38,
      tax: 0,
      finalTotal: 0,
      promoDisabled: false
    }
  }

  componentDidMount() {
    this.setState(
      {
        tax: (this.state.total + this.state.savings) * 0.0875
      },
      function() {
        this.setState({
          finalTotal: this.state.total + this.state.savings + this.state.tax
        })
      }
    )
  }

  giveDiscount = () => {
    if(this.props.promo === 'DISCOUNT') {
      this.setState(
        {
          finalTotal: this.state.finalTotal * 0.9
        },
        function() {
          this.setState({
            promoDisabled: true
          })
        }
      )
    }
  }

  render() {
    return (
      <div className = "container">
        <Col md = {{ span: 4, offset: 4 }} className = "purchase-card">
          <SubTotal price = { this.state.total.toFixed(2) } />
          <PickupSavings savings = { this.state.savings.toFixed(2) } />
          <TaxesFees tax = { this.state.tax.toFixed(2) } />
          <hr />
          <EstimatedTotal price = { this.state.finalTotal.toFixed(2) } />
          <ItemDetails cost = { this.state.finalTotal.toFixed(2) } />
          <hr />
          <PromoCode isDisabled = { this.state.promoDisabled } applyCoupon = { this.giveDiscount } />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  promo: state.promo.coupon
})

export default connect(mapStateToProps, { handleDiscount })(App)