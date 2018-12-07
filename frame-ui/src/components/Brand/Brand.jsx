/* 
 * 
 */

import React, { Component } from 'react';
import styles from './Brand.scss';

export default class Brand extends Component {
  componentDidMount() {
    const options = { onChange: this.props.onChange };
    this._container = document.getElementById('jsonEditor');
  }

  render() {
    return (
      <div className="brandContainer">
          <h4 className="brandTitle">F R A M E</h4>
      </div>
    );
  }
}
