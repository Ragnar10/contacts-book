import React, {Component} from 'react';
import propTypes from "../propTypes/propTypes";
import {Link} from "react-router-dom";

export default class ContactsListItem extends Component {
    render() {
        const { item: {name, surname, age, phone}} = this.props;
        return (
            <>
                <td>
                    <Link to='/details'>
                        {name}
                    </Link>
                </td>
                <td>
                    <Link to='/details'>
                        {surname}
                    </Link>
                </td>
                <td>
                    <Link to='/details'>
                        {age}
                    </Link>
                </td>
                <td>
                    <Link to='/details'>
                        {phone}
                    </Link>
                </td>
            </>
        );
    }
}
ContactsListItem.propTypes = {
    item: propTypes.listContact.isRequired
};
