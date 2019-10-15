import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <>
        <Container textAlign="center">
          <section name="header">  
            <h2>EMPLOYEE LIST</h2>
            <section name="main">
              <EmployeeList />
            </section>
          </section>
        </Container>
      </>
    );
  }
}

export default App;
