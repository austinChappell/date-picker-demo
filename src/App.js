import React, { Component } from 'react';
import DatePicker from 'react-custom-date-picker';

import './App.css';

class App extends Component {
  state = {
    date: new Date(2018, 11, 12),
  }

  handleDateChange = (date) => {
    this.setState({ date });
  }

  render() {
    return (
      <DatePicker
        date={this.state.date}
        handleDateChange={this.handleDateChange}
      />
    );
  }
}

export default App;
