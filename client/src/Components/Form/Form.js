import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {

  state = {
      search : '',
      tag :''
  }

  handleChange = (e)=>{
    const {searchFunc} = this.props;
    e.preventDefault();
    this.setState({ [e.target.name] : e.target.value }, () =>
      searchFunc(this.state.search.toLowerCase(),this.state.tag.toLowerCase())
    );
  }

    render() {
        return (
          <form className = 'form' action="">
              <input className = 'form-input'
                type="text" 
                placeholder = 'Search by name' 
                value = {this.state.search} 
                name = 'search'
                onChange =  {this.handleChange}
              />
              <input className = 'form-input'
                type="text" 
                placeholder = 'Search by Tag' 
                value = {this.state.tag} 
                name = 'tag'
                onChange =  {this.handleChange}
              />
          </form>
        )
    }
}

export default Form;