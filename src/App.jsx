import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList';
// import displayEmployeeProfile from './components/DisplayEmployeeProfile';

import { Container,Header, Grid, Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <>
        <Container >
          <Header textAlign="center"> 
          <section name="header">  
                <h2>Employee list</h2>
                </section>
          </Header>

          <Grid columns={1}>
            <Grid.Column> 
              <Segment>
                <section name="main">
                  <EmployeeList />
                  <displayEmployeeProfile />
                </section>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
