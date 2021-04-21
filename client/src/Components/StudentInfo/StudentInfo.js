import React, { Component } from 'react';
import './StudentInfo.scss';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';



class StudentInfo extends Component {
    state = {
        toggleGrades : false
    }
    
    toggleGrades=()=>{
        this.setState({
            toggleGrades : !this.state.toggleGrades
        })
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
                                
                                return <li key = {uuidv4()} className = 'student__grade student__detail'>{`Test ${index+1}       ${grade}`}%</li>
                            })}
                            </ul>
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

