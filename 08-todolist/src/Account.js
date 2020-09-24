import React from 'react'

export default class TaskList extends React.Component {
    state = {
        expenses : [
            {
                id: 1,
                description : 'Car Sale',
                type : 'credit',
                amount : 5000,
                reference : ['revenue'],
                select : false,

            },
            {
                id: 2,
                description : 'Commission',
                type : 'debit',
                amount : 1000,
                reference : 'payroll',
                select : false,
            },
            {
                id: 3,
                description : 'Car Repair',
                type : 'debit',
                amount : '2000',
                reference : 'expenses',
                select : true,
            },
        ],
        new_expense_description: '',
        new_expense_amount : null,
        expense_being_edited : 0,
        modified_expense_amount : 0,
        modified_expense_description : '',
    }
    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    addNewExpenses =()=> {
        let id = Math.floor(Math.random()*99999+10000)
        let newTask = {
            'id' : id,
            'description' : this.state.new_expense_description,
            'type' : 'debit',
            'amount' : this.state.new_expense_amount,
            'reference' : 'expenses',
            'select' : true,
        }
        this.setState ({
            'expenses' : [...this.state.expenses, newTask],
            'new_expense_description' : '',
            'new_expense_amount' : 0,              
        })
    }
    updateSelectStatus = (item) => {
        let modifiedExpense = {
            ...item, select : !item.select
        }
        let index = this.state.expenses.findIndex ( (t) => {
            return t.id === modifiedExpense.id
        })
        let finalExpenseCopy = [
            ...this.state.expenses.slice(0,index),
            modifiedExpense,
            ...this.state.expenses.slice(index+1)
        ]
        this.setState ({
            'expenses' : finalExpenseCopy
        })
    }
    deleteExpense = (item) => {
        let index = this.state.expenses.findIndex ( (t)=> {
            return t.id === item.id
        })

        let finalExpenseCopy = [ ...this.state.expenses.slice(0, index),
                                 ...this.state.expenses.slice(index+1)
        ];

        this.setState({
            'expenses': finalExpenseCopy
        })
    }
    startEditingExpense =(item) => {
        this.setState({
            'expense_being_edited' : item.id,
            'modified_expense_amount' : item.amount,
            'modified_expense_description' : item.description
        })
    }
    updateEditingExpense =(item) => {
        let modifiedExpense = {
            'id' : item.id,
            'description' : this.state.modified_expense_description,
            'type' : 'debit',
            'amount' : this.state.modified_expense_amount,
            'reference' : 'expenses',
            'select' : true,
        }
        let index = this.state.expenses.findIndex ( (t)=> {
            return t.id === item.id
        })
        let finalExpenseCopy = [
            ...this.state.expenses.slice(0,index),
            modifiedExpense,
            ...this.state.expenses.slice(index+1)
            
        ]
        this.setState ({
            'expenses' : finalExpenseCopy,
            'modified_expense_description' : '',
            'modified_expense_amount' : 0,   
            'expense_being_edited' : 0,        
        })
    }

    render (){
        return( 
            <React.Fragment>
                <div style= {{
                    padding : '20px'
                }}>
                    <h1>Expenses Tracker</h1> 
                    <table>
                        {this.state.expenses.map(item=>{
                            if (item.id !== this.state.expense_being_edited) {
                                return <tr>
                                        <td>
                                        <button onClick={()=>{
                                            this.startEditingExpense(item)
                                        }}>Edit</button> | 
                                    
                                        {/* Delete button */}
                                        <button onClick={()=>{
                                            this.deleteExpense(item)
                                        }}>Delete</button></td>

                                    <td>{item.id}</td>
                                    <td  style={{width:'100px', padding:'10px',margin:'5px'}}> {item.description}</td>            
                                    <td>$ {item.amount}</td>    
                                    <td> <input type='checkbox' checked={item.select} onChange={()=>{this.updateSelectStatus(item)}}/></td>        
                                </tr>
                            }
                            else {
                                return <tr>
                                        <td>
                                        <button onClick={()=>{
                                            this.updateEditingExpense(item)
                                        }}>Update</button> | 
                                    
                                        {/* Delete button */}
                                        <button onClick={()=>{
                                            this.deleteExpense(item)
                                        }}>Delete</button></td>

                                    <td>{item.id}</td>
                                    <td  style={{width:'100px', padding:'10px',margin:'5px'}}>
                                    <input type='text' name='modified_expense_description' value={this.state.modified_expense_description} onChange={this.updateFormField}/>
                                    </td>            
                                    <td>$ 
                                    <input type='text' name='modified_expense_amount' value={this.state.modified_expense_amount} onChange={this.updateFormField}/>
                                    </td>    
                                    <td> <input type='checkbox' checked={item.select} onChange={()=>{this.updateSelectStatus(item)}}/></td>        
                                </tr>                            
                            }
                        })}
                    </table>

                    <hr/>
                    <h2>Add New Expense</h2>
                    <div>
                    <label>Expenses Description</label>
                    <input type='text' name='new_expense_description' value={this.state.new_expense_description} onChange={this.updateFormField}/>
                    </div>
                    <div>
                        <label>Amount ($)</label>
                        <input type='text' name='new_expense_amount' value={this.state.new_expense_amount} onChange={this.updateFormField}/>
                    </div>
                    <button onClick={this.addNewExpenses}>Submit</button>
                </div>         
            </React.Fragment>
        )
    }
}

