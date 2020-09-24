import React from 'react'

// 1. State - can change
// 2. Props - configure how the components work, bgColor or give instructions,  
//          - change inside the component


export default class HealthForm extends React.Component {
    // set the state on what info we need inside the form
    state = {
        'fullname' : '',
        'weight' : null,
        'height' : null,
        'gender' : 'male',
        'history': [],
    }

    // set update function
    updateValue = (event) => {
        this.setState ({
            [event.target.name] : event.target.value,
        })
    }
    // set update checbox function
    updateCheckbox = (event)=> {
        let currentValue = this.state[event.target.name];
        //if value exist in current state value
        if (!currentValue.includes[event.target.value]){
            let modifiedValue = [...currentValue, event.target.value];
            this.setState ({
                [event.target.name] : modifiedValue
            })
        }
        // else remove from state
        else {
            let modifiedValue = this.state[event.target.name].filter(function(history){
                if (history == event.target.value) {
                    return false;
                } else {
                    return true;
                }

                
            })
            this.setState ({
                [event.target.name] : modifiedValue
            })
        }
            
    }


    // all class-based components require the 'render' function
    // it must return JSX
    render () {
        return (
            <React.Fragment>
                <div>
                    <label>Full Name : </label>
                    <input type ='text' name= 'fullname' value= {this.state.fullname} onChange={this.updateValue}/>
                </div>
                <div>
                    <label>Weight : </label>
                    <input type ='text' name= 'weight' value= {this.state.weight} onChange={this.updateValue}/>
                </div>
                <div>
                    <label>Height : </label>
                    <input type ='text' name= 'height' value= {this.state.height} onChange={this.updateValue}/>
                </div>
                <div>
                    <label>Gender : </label>
                    <input type='radio' name='gender' value='male' onChange={this.updateValue} checked={this.state.gender=='male'}/> Male 
                    <input type='radio' name='gender' value='female' onChange={this.updateValue} checked={this.state.gender=='female'}/> Female
                </div>
                <div>
                    <label>Medical History : </label>
                    <input type='checkbox' name='history' value='asthma' onChange={this.updateCheckbox}/> Asthma 
                    <input type='checkbox' name='history' value='highblood' onChange={this.updateCheckbox}/> High Blood 
                    <input type='checkbox' name='history' value='diabetes' onChange={this.updateCheckbox}/> Diabetes 
                </div>
            </React.Fragment>

        )
    }
}