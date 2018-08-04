import React, { Component } from 'react';
import DatePicker from 'react-custom-date-picker';
import moment from 'moment';

import './App.css';

class App extends Component {
  state = {
    date: null,
    // endDate: null,
  }

  handleDateChange = (date) => {
    this.setState({ date });
  }

  // handleDateChange = ([date, endDate]) => {
  //   this.setState({
  //     date,
  //     endDate,
  //   });
  // }

  render() {
    return (
      <DatePicker
        color="#296b3e"
        date={this.state.date}
        endDate={this.state.endDate}
        errorColor="#c32c27"
        handleDateChange={this.handleDateChange}
        // hoverWeek
        inputStyle={{
          borderRadius: 0
        }}
        lightHeader
        modal
        // range
        required
      />
    );
  }
}

export default App;
