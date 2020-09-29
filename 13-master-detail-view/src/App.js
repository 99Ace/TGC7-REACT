import React from 'react';
// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
//import the pages
import StudentListingPage from './pages/StudentListingPage';
import AddStudentPage from './pages/AddStudentPage';

//import context
import StudentContext from './context/StudentContext'


class App extends React.Component {
    state = {
        products: [
            {
                id: 1,
                product_name: 'Mazda',
                cost: 80000,
            },
            {
                id: 2,
                product_name: 'Toyota',
                cost: 90000,
            },
            {
                id: 1,
                product_name: 'Audi',
                cost: 100000,
            },
        ]
    }

    
    
    render() {

        const context = {
            'students' : () => {
                return this.state.students;
            },
            addStudent : (student_number, year_of_study, gender, graduated) => {
                this.setState ({
                    students : [
                        ... this.state.students,
                        {
                            student_number, 
                            year_of_study, 
                            gender, 
                            graduated,
                        }
                    ]
                })
            },
            
        }
        return (
            <StudentContext.Provider value={context}>
            <React.Fragment>

                <Router>
                    <nav>
                        <ul className='d-flex justify-content-end ml-auto mr-0 '>
                            <li className='my-3 mx-2 list-unstyled'> <Link to="/" className='text-decoration-none text-light btn btn-dark'>Home</Link> </li>
                            <li className='my-3 mx-2 list-unstyled'> <Link to="/addStudent" className='text-decoration-none text-light btn btn-dark'>New Student</Link> </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/'>
                            <StudentListingPage />
                        </Route>
                        <Route exact path='/addStudent'>
                            <AddStudentPage />
                        </Route>
                    </Switch>
                </Router>

            </React.Fragment>
            </StudentContext.Provider>
        )
    }
}

export default App;
