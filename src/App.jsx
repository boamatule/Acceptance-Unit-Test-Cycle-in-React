import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList'

class App extends Component {
  render() {
    return (
      <>
        <section name="header"> 
          <h>Employee list</h>
          <section name="main">
            <EmployeeList />
          </section>
        </section>
      </>
    );
  }
}

export default App;
