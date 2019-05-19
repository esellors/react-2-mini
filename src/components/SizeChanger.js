import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select disable={this.props.allowEdit} className="dropDownContainer" onChange={e => this.props.update(parseInt(e.target.value))}>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
