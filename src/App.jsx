import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList';
import { Container,Header, Grid, Segment, Button } from 'semantic-ui-react'

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
