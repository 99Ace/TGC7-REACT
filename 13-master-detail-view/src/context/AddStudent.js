import React from 'react'
import StudentContext from './StudentContext'

export default class AddPRoduct extends React.Component {
    static contextType = StudentContext;
    
    state = {
        student_number : '', 
        year_of_study : null, 
        gender : '', 
        graduated : false,
    }

    updateForm = event => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }
    onAddStudent =()=> {
        this.context.addStudent(
            this.state.student_number,
            this.state.year_of_study,
            this.state.gender,
            this.state.graduated,
        )
    }
    toggleCheckbox =(event)=> {
        this.setState({
            [event.target.name]  : !this.state[event.target.name]
        })
    }
    render () {
        return (
            <React.Fragment>
                <h1>Add New Student</h1>
                <div>
                    <label>Student Number</label>
                    <input type='text' name='student_number' value={this.state.student_number}
                    onChange={this.updateForm}/>
                </div>
                <div>
                    <label>Year of Study</label>
                    <input type='text' name='year_of_study' value={this.state.year_of_study}
                    onChange={this.updateForm}/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type='radio' name='gender' value='male'
                    onChange={this.updateForm} checked={this.state.gender=='male'}/> Male
                    <input type='radio' name='gender' value='female'
                    onChange={this.updateForm} checked={this.state.gender=='female'}/> Female
                </div>
                <div>
                    <label>Graduated  </label>
                    <input type='checkbox' name='graduated' onChange={this.toggleCheckbox} checked={this.state.graduated}/>
                </div>

                <button onClick={this.onAddStudent}>Add</button>
            </React.Fragment>
        )
    }
}