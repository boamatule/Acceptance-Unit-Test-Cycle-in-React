import React, { Component } from 'react';
import { List, Image, Button } from 'semantic-ui-react';
import axios from 'axios'
// import displayEmployeeProfile from './components/DisplayEmployeeProfile';

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

  viewEmployee(id) {
    this.setState({Employee: this.state.employee.filter(employee => employee.id !== id)});
  }

  render() {
    let { displayProfile } = ;
    let employeeList;
    if (this.state.employees) {
    employeeList = this.state.employees.map(employee => {
      return (
        <List>
          <List.Item key={employee.id}>
            <Image avatar src={employee.avatar} />
              <List.Content> 
                <List.Header as='p'> {`${employee.first_name} ${employee.last_name}`}</List.Header>
                  <List.Description>
                    {`${employee.first_name} @email.com`}
                  </List.Description>
                </List.Content>
              <Card>

                <Button onClick={() =>this.props.displayProfile.employee.id } 
                  floated='right'>Details</Button>
            </Card>
          </List.Item>
        </List>
      )
    })

  }

  render () {
    let displayProfile = this.props 

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