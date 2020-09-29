import React from 'react';
// 1. import context 
import StudentContext from './context/StudentContext';
import axios from 'axios'
// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import StudentListing from './pages/StudentListing';



// convert App to class
class App extends React.Component {
    //set up state for student database
    state = {
        students: [

        ]
    }
    async componentDidMount() {
        let response = await axios.get('data/student.json');
        this.setState({
            students : response.data
        })

    }

    render() {
        let repo = {
            getStudents: () => {
                return this.state.students;
            },
            
        }
        return (
            <>
                <StudentContext.Provider value={repo}>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <StudentListing/>
                            </Route> 
                        </Switch>
                    </Router>
                </StudentContext.Provider>
            </>
        );
    }

}

export default App;
