import React, { Component } from "react";
import QrReader from "react-qr-reader";

import './QrCodeReader.scss';

class QrCodeReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: false,
      result: "No results found",
      facingMode: "user"
    };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(foundData) {
    if (foundData) {
      this.setState({
        result: foundData
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <div class="row">
        <div class="col">
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%", height: "100%" }}
            facingMode={this.state.facingMode}
          />
        </div>
        
        <div class="col bordered-black">
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default QrCodeReader;