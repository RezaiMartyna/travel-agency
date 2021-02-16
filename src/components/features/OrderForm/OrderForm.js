//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col } from 'react-flexbox-grid';
import React from 'react';
import pricing from './../../../data/pricing.json';
import OrderOption from './../OrderOption/OrderOption';


const OrderForm = ({ tripCost, options, setOrderOption }) => (

  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        {' '}
        <OrderOption
          setOrderOption={setOrderOption}
          currentValue={options[option.id]}
          title={option.id}
          {...option}
        />
      </Col>
    ))}

    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}></OrderSummary>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,

};


export default OrderForm;


