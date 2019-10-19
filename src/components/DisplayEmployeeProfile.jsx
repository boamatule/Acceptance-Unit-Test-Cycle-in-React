import React, { Component } from 'react';
import { Card, Button, List, Image } from 'semantic-ui-react';
// import EmployeeList from './components/EmployeeList';

class displayEmployeeProfile extends Component {
  constructor(props) {
    super(props);
  }

  displayProfile() {
    this.setState({employeeList: this.state.employeeList.filter(displayProfile => employee.id !== id)});
  }

  render() {
    let displayProfile  = this.state.employeeList.map(employeeList => {
      return (
        <displayEmployeeProfile displayProfile={this.displayProfile.bind(this)} employeeList={employeeList} />
      )
      
    })

    return (
      <Card> 
      
                <Button floated='right'>Details</Button>
                <Button floated='right'>Details</Button>
    </Card>
    )

  }

}

export default displayEmployeeProfile;