'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {categoryCreate} from '../../actions/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


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
          <CategoryItem
            key={item.id}
            category={item}
          />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
   