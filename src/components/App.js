import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Requests from './Requests';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends React.Component {

  state = {
    requests: []
  }

  componentDidMount() {
    // При загрузке страницы получаем все "requests"
    axios.get('http://localhost:3001/invoices')
    .then(res => {
        this.setState({ requests: res.data });
    }).catch(err => {
        console.log(err)
    });

}

componentDidUpdate() {
  // При ридеректе со страницы заполнения формы проверяем, увеличилось ли количество "requests" в базе.
  // Eсли да, то делаем запрос к базе и получаем обновленный список.
  const oldLength = this.state.requests.length;

  axios.get('http://localhost:3001/invoices')
  .then(res => {
      const newLength = res.data.length;
      if (oldLength !== newLength) {
        this.setState({ requests: res.data });
      }
  }).catch(err => {
      console.log(err)
  });
}

  render() {
    return (
      <div className="App">
        <Header />
          <div className="content">
            <div className="inner">
              <div className="invoices__container">
                <div className="invoices__container--add">
                <h2>Requests</h2>
                <Link to='/form' ><button>Add new</button></Link>
                </div>
                <Requests requests={this.state.requests}/>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}
 
export default App;