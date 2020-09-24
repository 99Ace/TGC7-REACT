import React from 'react'
import axios from "axios"

export default class BookingForm extends React.Component {
    state = {
        firstname : '',
        lastname : '',
        seating : '',
        smoke : 'smoke',
        allergies : [],
        all_seating : [],
        all_smoke :[
            {
                value : 'smoke',
                display: 'Smoking Corner'
            },
            {
                value : 'Non-smoking',
                display: 'Non-Smoking Corner'
            },
        ],
        allAllergies : []
    }
    
    async componentDidMount() {

        // METHOD 1 : SYNC METHOD
        // let response = await axios.get('allergies.json');
        // let response2 = await axios.get('seating.json');

        // let allergies = response.data;
        // let seatings = response2.data;

        // ASYNC METHOD : CONCURRENT LOADING
        let request =  axios.get('allergies.json');
        let request2 =  axios.get('seating.json');

        let response = await request;
        let response2 = await request2;

        let allergies = response.data;
        let seatings = response2.data;


        this.setState ({
            'allAllergies' : allergies,
            'all_seating' : seatings
        })
    }

    updateValue =(event)=> {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    //Method 1 : 
    renderSeating() {
        let final = []
        for (let item of this.state.all_seating) {
            let jsx = (
                <React.Fragment>
                    <input type='radio' value={item.value} name='seating' onChange={this.updateValue}/>
                    <span>{item.display}</span>
                </React.Fragment>
            )
            final.push(jsx);
        }
        return final;
    }

    updateCheckbox =(event)=> {
        if (!this.state.allergies.includes(event.target.value)) {
            let modifiedCopy = [...this.state.allergies, event.target.value]
            this.setState ({
                allergies : modifiedCopy
            })
        }
        else{
            let modifiedCopy = this.state.allergies.filter(function(item) {
                if (item == event.target.value) {
                    return false;
                }
                else 
                    return true;
            })
            this.setState ({
                allergies : modifiedCopy
            })
        }
    }

    render () {
        return (
            <React.Fragment>
                <div>
                    <label>First Name : </label>
                    <input type='text' name='firstname' value={this.state.firstname} onChange={this.updateValue}/>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type='text' name='lastname' value={this.state.lastname} onChange={this.updateValue}/>
                </div>
                <div>
                    <label>Preferred Seating</label>
                    {this.renderSeating()}
                </div>
                <div>
                    <label>Smoking / Non-Smoking Preference</label> 
                    <select name='smoke' onChange={this.updateValue} value={this.state.smoke}>
                        {this.state.all_smoke.map(item => {
                            return (
                                <React.Fragment>
                                    <option value={item.value}> {item.display}</option>
                                </React.Fragment>

                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Any Allergies </label>
                    {this.state.allAllergies.map(item => {
                        return (
                            <React.Fragment>
                                <input type='checkbox' name='allergies' value={item.value} onChange={this.updateCheckbox}/>
                                <span>{item.display}</span>
                            </React.Fragment>
                        )
                    })}
                </div>

            </React.Fragment>
        )
    }
}