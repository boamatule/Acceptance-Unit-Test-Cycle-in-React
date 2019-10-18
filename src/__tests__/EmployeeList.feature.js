import React from 'react';
import { shallow, mount } from 'enzyme';
import EmployeeList from '../components/EmployeeList';
import axios from 'axios';

jest.mock('axios')

describe('<EmployeeList />', () => {
  it('should fetch employees from back-end using Axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<EmployeeList />)
    expect(axiosSpy).toBeCalled()
  })

  it('should render a list of 5 employees', async () => {
    const employees = {"data":[
      { "id": 1, "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" },
      { "id": 2, "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" },
      { "id": 3, "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" },
      { "id": 4, "first_name": "Eve", "last_name": "Holt", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" },
      { "id": 5, "first_name": "Charles", "last_name": "Morris", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg" }
    ]}

    // We mount the component
    const describedComponent = mount(<EmployeeList />)
    // we make sure that the components state is updated
    await describedComponent.setState({ employees: employees.data })
    // we make sure that the component renders 5 instances on a list item (<li>)
    expect(describedComponent.find('li')).toHaveLength(5);
  })
})