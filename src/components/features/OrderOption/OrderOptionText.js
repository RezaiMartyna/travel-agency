import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionText = () => (
  <div className={styles.component}>
    <input type="text"
      placeholder={'write here'}
      className={styles.input}
    />
  </div>
);

export default OrderOptionText;
