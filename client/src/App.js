
import React, { Component } from 'react'
import './App.scss';
import axios from 'axios';
import StudentInfo from './Components/StudentInfo/StudentInfo';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Form/Form';
import TagForm from './Components/TagForm/TagForm';



class App extends Component {

  state = {
    studentsArr: '',
    filterArr: '',
    tagArr :[]
  }
  
  
  componentDidMount(){
    axios.get('https://api.hatchways.io/assessment/students')
    .then(res =>{
      this.setState({
        studentsArr : res.data.students,
        filterArr: res.data.students,
      })
    })
  }
  


  searchStudents = (userInput)=>{
    // console.log(userInput);
    const {studentsArr} = this.state;
    const dynamicResults =  studentsArr.filter(student=>{
        const searchField = userInput.toLowerCase();
        const first = student.firstName.toLowerCase();
        const last = student.lastName.toLowerCase();
        return first.includes(searchField) || last.includes(searchField)
    })
    this.setState({
      filterArr : dynamicResults
    })
}



searchByTag = (userInput,t)=>{
  // console.log(userInput);
  // const {studentsArr} = this.state;
  // const dynamicResults =  studentsArr.filter(student=>{
  //     const searchField = userInput.toLowerCase();
  //     // const tag = ;
      
  //     return first.includes(searchField) || last.includes(searchField)
  // })
  // this.setState({
  //   filterArr : dynamicResults
  // })
}




handleKeyPress = (e,tag) => {
  // e.preventDefault();
  if(e.key === 'Enter'){
      const {tagArr} = this.state;
      // let arr = [];
      // arr.push(tag)
      this.setState({
          tagArr: [...tagArr,tag],
          tag : '',
      })
        
  }
}

  render() {

    const {filterArr} = this.state;

    if(!filterArr){
     return <p>Loading....</p>
    }
    return (
      <>
          
          <div className = 'app'>
          <Form students ={filterArr} searchFunc = {this.searchStudents}/>
          <TagForm students ={filterArr} searchFunc = {this.searchByTag}/>
            {filterArr.map(student=>{
          return   <StudentInfo key = {uuidv4()} student = {student} tagArr= {this.state.tagArr} handleKeyPress={this.handleKeyPress}/>
            })}
          </div>
      </>
    )
  }
}






export default App;
 

 

