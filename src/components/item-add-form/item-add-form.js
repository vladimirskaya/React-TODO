import React, { Component } from 'react'

import './item-add-form.css';  

export default class ItemAddForm extends Component {

    render() {
        // console.log(this.props);
        // const { onAdded } = this.props;
       return(
        <div className="item-add-form">
            <button className="btn btn-secondary"
                onClick={ () => this.props.onItemAdded('Hello world') }>
                Add Element
            </button>
        </div>
       )
    }
}