import React from 'react';
import Invoice from './Invoice';


class Requests extends React.Component {
    render() {
        return (
            <div className="invoices__container--list">
            <div className="invoice__single titles">
                <div className="invoice__single--fields">
                    <div className="invoice__single__item"><span className="spanKey">Price</span></div>
                    <div className="invoice__single__item"><span className="spanKey">Id</span></div>
                    <div className="invoice__single__item"><span className="spanKey">From/Until</span></div>
                    <div className="invoice__single__item"><span className="spanKey">Passangers</span></div>
                </div>
            </div>
            
            {this.props.requests ? this.props.requests.map((res, i) => {
                const [ fromDate, toDate ] = res.dateRange;
                return <Invoice key={i} 
                                        passangers={res.passangers}
                                        price={res.price}
                                        fromDate={fromDate}
                                        toDate={toDate}
                                        id={res.id}
              />
            }) : ''}
            </div>
        )
    }
}

export default Requests;