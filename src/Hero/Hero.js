import React, { Component } from 'react';

export default class Heroes extends Component {

    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <p>Name: {this.props.name}, ID: {this.props.id}</p>
        )
    }
}