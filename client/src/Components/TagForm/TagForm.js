import React, { Component } from 'react';
// import './Form.scss';

class TagForm extends Component {

  state = {
      tag : '',
      
  }

  handleChange = (e)=>{
    const {searchFunc} = this.props;
    e.preventDefault();
    this.setState ({
      search : e.target.value,
    })
    

    searchFunc(this.state.search.toLowerCase())
  }


 

    render() {
      const {students}= this.props;
      // console.log(students)
        return (
          <form className = 'form' action="">
              <input className = 'form-input'
              type="text" 
              placeholder = 'Search by Tag' 
              value = {this.state.tag} 
              name = 'tag'
              onChange =  {this.handleChange}
              />
              {/* <button className = 'form-btn' >Submit</button> */}
          </form>
        )
    }
}


export default TagForm;