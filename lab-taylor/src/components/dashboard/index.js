'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../actions/category-actions.js';

import CategoryForm from '../category-form';


class Dashboard extends React.Component{
  

  render() {
    return(
      <main className='dashboard'>
        <h2>create a new category</h2>

        <CategoryForm
          buttonText='create a category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map(item => 
          <div key={item.id}>
            <h3>{item.name}</h3>
          </div>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);