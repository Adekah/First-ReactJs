import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './List.css';
export default class Form extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    Proptypes = {
     contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func
    };
    state = {
        name: '',
        phone: ''
    };
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.addContact({ ...this.state });

        this.setState({name:'',phone:''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input id="name" name="name" placeholder="Enter a Name" onChange={this.onChange} value={this.state.name} /><br />
                    <input id="phose" name="phone" placeholder="Enter a Phone" onChange={this.onChange} value={this.state.phone} />
                    <button className={"Button"}> Add</button>
                </form>
            </div>
        )
    }
}
