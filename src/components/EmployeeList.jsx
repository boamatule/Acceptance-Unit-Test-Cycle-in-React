import React, { Component } from 'react';
import { Header, List, Image, Grid, Container, Button, Divider, Popup } from 'semantic-ui-react';
import axios from 'axios'

class EmployeeList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    let employees = await axios.get('https://reqres.in/api/users?per_page=5')
    this.setState({ employees: employees.data.data }) 
  }
  render() {
    let employeeList
    if (this.state.employees) {
    employeeList = this.state.employees.map(employee => {
      return (
      
    
          <Container>
            <Grid relaxed stackable>
              <Grid.Column>
                <List key={employee.id}>
                  <Image avatar src={employee.avatar} />
                  <List.Content> 
                    <List.Header as='p'> {`${employee.first_name} ${employee.last_name}`}</List.Header>
                    <List.Description>
                    {`${employee.first_name} @email.com`}
                    </List.Description>
                  </List.Content>
                </List>

                {/* <Button    
                  attached='bottom'
                  content='View more details'
                  onClick={this.employeeList}
                  onKeyPress={this.handleKeyPress}
                  target="_blank"
                  />         */}

                  <Popup trigger={<Button>View more details</Button>} flowing hoverable>
                    <Grid centered divided columns={1}>
                      <Grid.Column textAlign='center'>

                      <List key={employee.id}>
                        <Image avatar src={employee.avatar} />
                        <List.Content> 
                          <List.Header as='p'> {`${employee.first_name} ${employee.last_name}`}</List.Header>
                          <List.Description>
                          {`${employee.first_name} @email.com`}
                          </List.Description>
                        </List.Content>
                      </List>

                        <Button color='green' >Edit</Button>
                        <Button color='red' >Delete</Button>
                      </Grid.Column>
                    </Grid>
                  </Popup>   


            </Grid.Column>
          </Grid>
        </Container>
      
      )
    })

  }

    return (
      <>
        <ul>
          {employeeList}
        </ul>
      </>
    );
  }
}
export default EmployeeList;