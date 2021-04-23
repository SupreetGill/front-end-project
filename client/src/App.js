import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import StudentInfo from './Components/StudentInfo/StudentInfo';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Form/Form';

class App extends Component {

  state = {
    studentsArr: [],
    filterArr: []
  }
    
  componentDidMount(){
    axios.get('https://api.hatchways.io/assessment/students')
    .then(res =>{
      let data = res.data.students.map(function(vals){
        let obj = {...vals, tag: []}
        return obj;
      });
      this.setState({
        studentsArr : data,
        filterArr: data
      })
    })
  }
  
  

searchStudents = (userInput,tag)=>{
    const {studentsArr} = this.state;

    const dynamicResults =  studentsArr.filter(student=>{
      const searchField = userInput.toLowerCase();
      const first = student.firstName.toLowerCase();
      const last = student.lastName.toLowerCase();
      const name = first + last;
      const tagsArray = student.tag;
      
      //WHEN NAME & TAG IS POPULATED
      if(searchField && tag.length>0){
        let flag = false;
        for(let j=0; j<tagsArray.length; j++){
          if(tagsArray[j].includes(tag)) flag = true;
        }
        return name.includes(searchField) && flag == true;
      } 
      //WHEN BOTH NAME & TAG IS POPULATED
      else if(searchField.length == 0 && tag.length==0){
        return true;
      }
      //WHEN ONLY NAME IS POPULATED
      else if(searchField && tag.length == 0) {
        return name.includes(searchField);
      }
      //WHEN ONLY TAG IS POPULATED
      else if( searchField.length == 0 && tag.length > 0) {
        for(let j=0; j<tagsArray.length; j++){
          if(tagsArray[j].includes(tag)) return true;
        }
      }  
    });

    this.setState({
      filterArr : dynamicResults
    });
       
}


handleKeyPress = (e,tag,id) => {
  const {filterArr} = this.state;

  if(e.key === 'Enter'){
    const secArr = filterArr.filter(s => s.id !== id);
    const selected = filterArr.find(s=> s.id === id);
    selected.tag.push(tag);
   
    let arr = [selected, ...secArr];
    arr.sort((a,b)=>a.id-b.id);
     this.setState({
       filterArr : arr
     })

  }
}

  render() {

    let {filterArr} = this.state;
    
    if(!filterArr){
     return <p>Loading....</p>
    }
    return (
      <>
          
          <div className = 'app'>
          <Form students ={filterArr} searchFunc = {this.searchStudents}/>
            {
              filterArr.map(student=>{
                return   <StudentInfo key = {uuidv4()} student = {student} handleKeyPress={this.handleKeyPress}/>
              }
            )}
          </div>
      </>
    )
  }
}

export default App;
 

 

