import React from 'react';
import QrCodeReader from '../components/QrCodeReader';

export class Scan extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="barcode-scan-container">
                <QrCodeReader />
            </div>
        );
    }


} 