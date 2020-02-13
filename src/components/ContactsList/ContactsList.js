import React, {Component} from 'react';
import {Link} from "react-router-dom";
import propTypes from "../propTypes/propTypes";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import './ContactsList.css';

export default class ContactsList extends Component {

    deleteItem = (id) => {
        this.props.onDeleteItem(id);
    };

    editContact = (listItem) => {
        this.props.onEditContact(listItem);
    };

    render() {
        const {list} = this.props;
        const renderItems = list.map((listItem) => {
            const {id} = listItem;
            return (
                <tr key={id}
                    onClick={() => this.props.onShowContact(listItem)}
                >
                    <ContactsListItem item={listItem} />
                    <td>
                        <button className='delete-btn' onClick={() => this.deleteItem(id)}>Delete</button>
                    </td>
                    <td>
                        <Link to='/form'>
                            <button className='edit-btn' onClick={(e) => this.editContact(listItem)}>Edit</button>
                        </Link>
                    </td>
                </tr>
            );
        });
        return (
            <div className='table-wrap'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Del</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderItems}
                    </tbody>
                </table>
                <Link to='/form'>
                    <button className='add-btn' onClick={this.props.onAddContact}>Add new contact</button>
                </Link>
            </div>
        );
    }
}

ContactsList.propTypes = {
    list: propTypes.listContacts.isRequired
};