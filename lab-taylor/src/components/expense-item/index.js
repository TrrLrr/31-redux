'use strict';

import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';

import{expenseDelete, expenseUpdate}  from '../../actions/expense-actions';

class ExpenseItem extends React.Component{
  render() {
    const { expenses, expenseDelete, expenseUpdate, expense } = this.props;
    
    return(
      <div>
        { expenses.map( expense =>
          <div key={expense.id}>
            <p>{expense.expense}</p>
            <p>{expense.cost}</p>
            <button onClick={() => expenseDelete(expense)}>X</button>
            <ExpenseForm
              buttonText='update'
              expense={expense}
              onComplete={expenseUpdate}
            />

          </div>
        )}
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense))
})

export default connect(null, mapDispatchToProps)(ExpenseItem);