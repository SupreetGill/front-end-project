
import React, { Component } from 'react'
import './App.scss';
import axios from 'axios';
import StudentInfo from './Components/StudentInfo/StudentInfo';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Form/Form';



class App extends Component {

  state = {
    studentsArr: ''
  }
  
  
  componentDidMount(){
    axios.get('https://api.hatchways.io/assessment/students')
    .then(res =>{
      this.setState({
        studentsArr : res.data.students
      })
    })
  }
  


  searchStudents = (userInput)=>{
    const {studentsArr} = this.state;
    const dynamicResults =  studentsArr.filter(student=>{
        const searchField = userInput.toLowerCase();
        const first = student.firstName.toLowerCase();
        const last = student.lastName.toLowerCase();
        return first.includes(searchField) || last.includes(searchField)
    })
    this.setState({
      studentsArr :dynamicResults
    })
}


  render() {

    const {studentsArr} = this.state;

    if(!studentsArr){
     return <p>Loading....</p>
    }
    return (
      <>
          <Form students ={studentsArr} searchFunc = {this.searchStudents}/>
          <div className = 'app'>
            {studentsArr.map(student=>{
          return   <StudentInfo key = {uuidv4()} student = {student} />
            })}
          </div>
      </>
    )
  }
}






export default App;
 

 

