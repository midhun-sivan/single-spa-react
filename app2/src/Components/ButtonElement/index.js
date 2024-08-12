import React, { Component } from "react";

export default class ButtonElement extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        placeholder={this.props.placeholderLabel}
        name={this.props.htmlForName}
        onClick={this.props.onClick}
        value={this.props.value}
        children={this.props.children}
        disabled={this.props.disable}
      />
    );
  }
}
