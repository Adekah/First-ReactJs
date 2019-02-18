import React, { Component } from 'react'
import './List.css';
import PropTypes from 'prop-types';
export class List extends Component {

    Proptypes = {
        contacts: PropTypes.array.isRequired,
    };
    state = { filterText: '' };

    onChangeFilterText = (e) => {
        console.log(e.target.value)
        this.setState({ filterText: e.target.value })
    };
    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );

        return (
            <div className={"ListArea"}>
                <input
                    value={this.state.filterText}
                    onChange={this.onChangeFilterText}
                    name="filter"
                    id="filter"
                    placeholder="Filter by name or phone " />
                <ul className={"list"}>
                    {
                        filteredContacts.map(contact => {
                            return (
                                <li key={contact.phone}>
                                    <span className={"Name"}>{contact.name}</span>
                                    <span className={"Phone"}>{contact.phone}</span>
                                    <span className={"clearfix"}></span>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List
