'use strict';

import React from 'react';
import {connect} from 'react-redux';

import{expenseDelete}  from '../../actions/expense-actions';

class ExpenseItem extends React.Component{
  render() {
    const { expenses, expenseDelete } = this.props;
    
    return(
      <div>
        { expenses.map( expense =>
          <div>
            <p>{expense.expense}</p>
            <p>{expense.cost}</p>
            <button onClick={() => expenseDelete(expense)}>X</button>
          </div>
        )}
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  expenseDelete: (expense) => dispatch(expenseDelete(expense))
})

export default connect(null, mapDispatchToProps)(ExpenseItem);