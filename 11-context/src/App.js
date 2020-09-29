import React from 'react';
import StudentContext from './context/StudentContext'
import StudentListing from './context/StudentListing'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
    state = {
        students : [
            {
                student_number: 'CCHS0001',
                year_of_study : 1988,
                gender : 'male',
                graduated : true,
            },
            {
                student_number: 'SP0001',
                year_of_study : 1992,
                gender : 'female',
                graduated : true,
            },
            {
                student_number: 'TGC0001',
                year_of_study : 2020,
                gender : 'male',
                graduated : false,
            },
        ]
    }

    componentDidMount () {
        //Load in all product from database and set inside the state
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
                    <StudentListing/>
                </React.Fragment>
            </StudentContext.Provider>
            
        )
    }
    
    
}

export default App;
