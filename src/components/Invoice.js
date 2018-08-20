import React from 'react';

class Invoice extends React.Component {

    render() {
        return (
                <div className="invoice__single">
                    <div className="invoice__single--fields">
                        <div className="invoice__single__item"><span className="spanVal">{this.props.price} $</span></div>
                        <div className="invoice__single__item"><span className="spanVal">{this.props.id}</span></div>
                        <div className="invoice__single__item"><span className="spanVal">{this.props.fromDate} - {this.props.toDate}</span></div>
                        <div className="invoice__single__item"><span className="spanVal">{this.props.passangers}</span></div>
                    </div>
                </div>
        )
    }
}

export default Invoice;