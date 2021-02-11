//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col } from 'react-flexbox-grid';
import React from 'react';


const OrderForm = ({tripCost, options}) => (

  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}></OrderSummary>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,

};


export default OrderForm;


