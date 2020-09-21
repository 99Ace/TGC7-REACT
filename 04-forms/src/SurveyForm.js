import React from 'react'


export default class SurveyForm extends React.Component {
    state = {
        fullname : '',
        email : '',
        gender : '',
        hobbies : '',
        country: '',
    }
    updateField = (event)=> {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    // updateCheckboxes =(event) => {
    //     // make a copy of the Array
    //     let modifiedCopy  = [...this.state.hobbies]
    //     // modify the copy 
    //     modifiedCopy.push(event.target.value)

    //     // or  shortcut
    //     // let modifiedCopy =[...this.state.hobbies, event.target.value]

    //     // replace the array with the modified copy
    //     this.setState ({
    //         hobbies : modifiedCopy
    //     })
    //     // state is immutable 
    //     // look for remove state item in react
    //  }   
    
    updateCheckboxes = event => {
        // includes checks if the item exist inside the array
    if (!this.state.hobbies.includes(event.target.value)) {
      // 1. make a copy of the array from the state
      // 2. and modify at the same time
      let modifiedCopy = [...this.state.hobbies, event.target.value];

      // 2. modify the copy
      //    modifiedCopy.push(event.target.value)

      // 3. replace the array in the state with the modified copy
      this.setState({
        hobbies: modifiedCopy
      });
    } else {
        
        let modifiedCopy = this.state.hobbies.filter(function(hobby){
            if (hobby == event.target.value) {
                return false;
            } else {
                return true;
            }
        })

        this.setState({
            hobbies: modifiedCopy
        })
    }
  };




    render () {
        return (
            <React.Fragment>
                <div>
                    <label>Full Name : </label>
                    <input type='text' name='fullname' value={this.state.fullname}
                        onChange={this.updateField}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input type='text' name='email' value={this.state.email} onChange={this.updateField}/>
                </div> 
                <div>
                    <label>Gender : </label>
                    <input type='radio' value='M' name='gender'/>Male
                    <input type='radio' value='F' name='gender'/>Female
                    <input type='radio' value='U' name='gender'/>Unsure
                </div>
                <div>
                    <label>Hobbies</label>
                    <input type='checkbox' value='sleeping' name='hobbies' onChange={this.updateCheckboxes}/>Sleeping
                    <input type='checkbox' value='golfing' name='hobbies' onChange={this.updateCheckboxes}/>Golfing
                    <input type='checkbox' value='soccer' name='hobbies' onChange={this.updateCheckboxes}/>Soccer
                    <input type='checkbox' value='reading' name='hobbies' onChange={this.updateCheckboxes}/>Reading
                </div>

                <div>
                    <label>Country</label>
                    <select name='country'>
                        <option value='singapore'>Singapore</option>
                        <option value='malaysia'>Malaysia</option>
                        <option value='thailand'>Thailand</option>
                    </select>
                </div>


            </React.Fragment>
        )
    }
}
