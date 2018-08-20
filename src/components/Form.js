import React from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import uniqid from 'uniqid';
import { DateRange } from 'react-date-range';
import moment from 'moment';
import calendar from '../calendar.png';

class Form extends React.Component {
    priceRef = React.createRef();
    passangersRef = React.createRef();
    dateRef = React.createRef();

    state = {
        calendarOpened: false,
        selectedRange: null,
        disabled: false,
    }

// Открыть календарь
openCalendar = () => {
    this.setState({
      calendarOpened: true,
    });
  }

  // Отобразить даты
  changeDate = (range) => {
    const start = moment(range.startDate._d).format('DD-MM-YYYY');
    const end = moment(range.endDate._d).format('DD-MM-YYYY');
    const dateRange = `${start} / ${end}`;

    this.setState({ selectedRange: dateRange });
  }

// Валидация полей Input: "Passangers" и "Price" 
testInput = (e) => {
    e.preventDefault();
    const regex = new RegExp(/^\d+$/);

    if (!regex.test(e.target.value) && e.target.value !== "") {
        this.setState({ disabled: true });
    } else {
        this.setState({ disabled: false });
    }
}

// Сабмит формы
submitForm = (e) => {
    e.preventDefault();

    const request = {
        price: this.priceRef.current.value,
        passangers: this.passangersRef.current.value,
        dateRange: this.dateRef.current.value.split(/[ /]+/),
        id: `req-${uniqid.time()}`
    }

    axios.post('http://localhost:3001/invoices', request, {'Content-Type': 'application/json'})
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });

    e.target.reset();
    this.setState({ calendarOpened: false, selectedRange: null });
    // Редирект на главную страницу
    this.props.history.push('/');
}

    render() {
        return(  
            <div className="App">
                <Header />
                    <div className="inner">
                        <div className="invoice__form__container">
                            <h2>Create Request</h2>
                            <div className={`error ${this.state.disabled ? 'show' : ''}`} >
                                Please Enter a Valid Number!
                            </div>
                            <form className="invoice__form" onSubmit={this.submitForm}>
                                <div className="invoice__form--labels">
                                    <label>Price</label>
                                    <label>Passangers</label>
                                    <label>From / untill</label>
                                </div>
                                <div className="invoice__form--fields">
                                    <div className="input-unit">
                                        <span className="left">$</span><input ref={this.priceRef} name="price" type="text"onChange={this.testInput} /><span className="right">.00</span>
                                    </div>
                                    <input ref={this.passangersRef} defaultValue={this.state.passangerInput} name="passangers" type="text" onChange={this.testInput}/>
                                    <div>
                                        <div className="input-unit dates" onClick={this.openCalendar} >
                                        <input 
                                            ref={this.dateRef} 
                                            name="date" 
                                            type="text" 
                                            value={this.state.selectedRange || ''}
                                            />
                                            <span className="right"><img src={calendar}alt="calendar"/></span>
                                        </div>

                                    {this.state.calendarOpened
                                        ? <DateRange
                                        onChange={this.changeDate}
                                        twoStepChange={true}
                                        calendars={1}
                                    />
                                        : null}
                                    </div>
                                </div>
                                <button disabled={this.state.disabled}>Add</button>
                        </form>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}
 
export default Form;