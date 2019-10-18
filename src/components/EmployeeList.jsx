import React, { Component } from 'react';
import { List, Image, Button, Segment, Divider, ListContent } from 'semantic-ui-react';
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
        <List selection verticalAlign='middle'>
          <List.Item key={employee.id}>
            <Image avatar src={employee.avatar} />
              <List.Content> 
                <List.Header as='p'> {`${employee.first_name} ${employee.last_name}`}</List.Header>
                  <List.Description>
                    {`${employee.first_name} @email.com`}
                  </List.Description>
                </List.Content>
              <List.Content>
                <Button content='More details' target='key={employee.id}' floated='right' centered></Button>
            </List.Content>
          </List.Item>
        </List>
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