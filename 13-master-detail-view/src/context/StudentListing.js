import React, {useContext} from 'react';
import StudentContext from './StudentContext'
import AddStudent from './AddStudent'

export default function StudentListing(){
    let context = useContext(StudentContext);

    return (
        <React.Fragment>
            <table style={{
                border : 'black solid 1px',
                width : '100%'
            }}>
                {context.students().map(p => (
                    <tr>
                        <td>{p.student_number}</td>
                        <td>{p.year_of_study}</td>
                        <td>{p.gender}</td>
                        <td><input type='checkbox' checked={p.graduated}/>Graduated</td>
                        <td><button
                            
                            >Delete</button></td>
                    </tr>  
                ))}
            </table>
            <AddStudent/>

        </React.Fragment>
    )
}