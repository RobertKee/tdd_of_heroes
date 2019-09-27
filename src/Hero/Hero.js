import React, { Component } from 'react';

export default class Heroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            placeholderName: this.props.name
        }

        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(event) {
        this.setState({placeholderName: event.target.value})
        console.log(this.state.placeholderName)
    }

    render(props) {
        return (
            <div>
                <h2>{this.props.name.toUpperCase()} Details</h2>
                <div>
                    <span>id: </span>
                    {this.props.id}
                </div>
                <label>
                    name:
                    <input type="text" defaultValue={this.state.placeholderName} onChange={this.handleNameChange} />
                </label>
            </div>
        )
    }
}