import React from 'react'

export default class TaskList extends React.Component {
    state = {
        transactions : [
            {
                id: 1,
                description : 'Car Sale',
                type : 'credit',
                amount : 5000,
                reference : ['Revenue'],
            },
            {
                id: 2,
                description : 'Commission',
                type : 'debit',
                amount : 1000,
                reference : 'Payroll',
            },
            {
                id: 3,
                description : 'Car Repair',
                type : 'debit',
                amount : '2000',
                reference : 'Expenses',
            },
        ],
        newDescription: '',
    }
    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render (){
        return(
            <React.Fragment>
                <div
                    style={{
                        padding : '20px'
                    }}>
                    
                    <h1>Account</h1>
                    <table style={{
                        width : '100%'
                    }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Description</th>
                                <th>Debit/Credit</th>
                                <th>Amount</th>
                                <th>Reference</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.transactions.map(item =>{
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <input type='radio' value='credit' onChange={this.updateFormField}/> {item.type}

                                    </td>
                                    <td>{item.amount}</td>
                                    <td>{item.reference}</td>
                                    <td><button>Edit</button></td>
                                </tr>
                            })}
                            <h2>Add a new transaction</h2>
                                <tr>
                                    <td></td>
                                    <td><input type='text' name='newDescription' onChange={this.updateFormField} value={this.state.newDescription}/></td>
                                    <td>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}