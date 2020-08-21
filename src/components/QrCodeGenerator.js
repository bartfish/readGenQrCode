import React from "react";
import { QRCode } from "react-qr-svg";

import './QrCodeGenerator.scss';
 
class QrCodeGenerator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            qrCode: "",
            qrCodeLength: 90
        }
    }

    makeId = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
        return result;
    }

    generateCode = () => {
        this.setState({ qrCode: this.makeId(this.state.qrCodeLength) })
    }

    render() {
        return (
            <div>
                <button class="generate-code-btn" onClick={ this.generateCode }>Generate code</button>
                 <div class="row">
                    <div class="col bordered-black qrcode-value-container">
                        <p>{this.state.qrCode}</p>
                    </div>
                    
                    <div class="col">
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 400, height: 400 }}
                        value={this.state.qrCode}
                    />
                    </div>
                </div>               
            </div>
        );
    }
}

export default QrCodeGenerator;