import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {

  state = {
      search : '',
      
  }

  handleChange = (e)=>{
    const {searchFunc} = this.props;
    e.preventDefault();
    this.setState ({
      search : e.target.value,
    })
    

    searchFunc(this.state.search.toLowerCase())
  }

  // handleKey = (e) =>{
  //   console.log(e.target.value);

  //   const {searchFunc} = this.props;
  //   this.setState ({
  //     search : e.target.value,
  //   })
  //   searchFunc(this.state.search.toLowerCase())
  // }


  // searchStudents = ()=>{
  //     const {students}= this.props;
  //     const {search} = this.state;
  //     students.filter(student=>{
  //       const lookUp = search.toLowerCase();
  //       const first = student.firstName.toLowerCase();
  //       const last = student.lastName.toLowerCase();
  //       return first.includes(lookUp) || last.includes(lookUp)
  //     })
  // }

    render() {
      const {students}= this.props;
      // console.log(students)
        return (
          <form className = 'form' action="">
              <input className = 'form-input'
              type="text" 
              placeholder = 'Search by name' 
              value = {this.state.search} 
              name = 'search'
              onChange =  {this.handleChange}
              />
              {/* <button className = 'form-btn' >Submit</button> */}
          </form>
        )
    }
}


export default Form;