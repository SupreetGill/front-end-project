import React, { Component } from 'react';
import './StudentInfo.scss';
import { v4 as uuidv4 } from 'uuid';

class StudentInfo extends Component {
    
    state = {
        toggleGrades : false,
        tag : ''
    }
    
    toggleGrades=()=>{
        this.setState({
            toggleGrades : !this.state.toggleGrades
        })
    }

    handleChange = (e)=>{
        e.preventDefault();
        this.setState ({
          tag : e.target.value,
        })
    }  
    
handleKey=(e)=>{
    const {tag}= this.state;
    const {student} = this.props;
    const id = student.id;

    this.props.handleKeyPress(e,tag,id);
}

    render() {
        const {student} = this.props;
       
        return (
                <section  className = 'student' >
                    <div className = 'student__box' >
                        <div className = 'student__img-box' >
                            <img className = 'student__img' src={student.pic} alt=""/>
                        </div>
                        <div className = 'student__info-box' >
                            <h1 className = 'student__name' >{student.firstName} {student.lastName} </h1>
                            <ul className = 'student__ul'>
                                <li className = 'student__detail' >Email: {student.email}</li>
                                <li className = 'student__detail' >Company: {student.company}</li>
                                <li className = 'student__detail' >Skill: {student.skill}</li>
                                <li className = 'student__detail' >Average: 99%</li>
                            </ul>
                            
                            <ul className = {this.state.toggleGrades ?'student__grade-box': 'student__noShow' }  >
                            {student.grades.map((grade,index) =>{
                                
                                return <li key = {uuidv4()} className = 'student__grade student__detail'> <span>{`Test ${index+1}`}</span> <span>{grade}</span>%</li>
                            })}
                            </ul>

                            <ul className = 'student__ul-box' >{student.tag.map(t=>{
                                return <li className = 'student__li' key = {uuidv4()}>{t}</li>
                            })}</ul>
                           
                                <input className  = "student__add"
                                id = {uuidv4()}
                                type="text" 
                                placeholder = 'add a tag'
                                name = 'tag'
                                value = {this.state.tag}
                                onChange = {this.handleChange}
                                onKeyPress = {this.handleKey}
                                />
                                
                        </div>
                        <div className = 'student__btn-box' >
                          <button onClick = {this.toggleGrades}  className = 'student__btn' >+</button>  
                        </div>
                        
                    </div>
                    
                </section>
        );
    }
}

export default StudentInfo;

