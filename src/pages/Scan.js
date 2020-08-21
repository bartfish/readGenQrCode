import React from 'react';
import QrCodeReader from '../components/QrCodeReader';
import QrCodeGenerator from '../components/QrCodeGenerator';

export class Scan extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="barcode-scan-container">
                <QrCodeReader />

                <QrCodeGenerator />
            </div>
        );
    }


} 