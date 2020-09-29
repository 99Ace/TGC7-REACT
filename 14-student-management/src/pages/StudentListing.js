import React, { useContext } from 'react'
import StudentContext from '../context/StudentContext'

export default function StudentListing () {
    const controller = useContext(StudentContext)
    return <>
        <h1>Student Listing Page</h1>
        <table style={{width:'100%', padding : '15px'}}>

            <tr>
                <th>Student Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Graduated</th>
            </tr>
            {controller.getStudents().map( student => {
                return <tr>
                    <td>{student.student_number}</td>
                </tr>
            })

            }
            
        </table>

    </>
}