import React, {Component} from 'react';
import propTypes from "../propTypes/propTypes";
import {Link} from "react-router-dom";
import './ContactDetails.css';

export default class ContactDetails extends Component {
    render() {
        const { contact: {name, surname, age, phone}} = this.props;
        return (
            <div className='contact-container'>
                <div className='contact-name'>{name}</div>
                <div className='contact-surname'>{surname}</div>
                <div className='contact-age'>{age}</div>
                <div className='contact-phone'>{phone}</div>
                <Link to='/' className='back'>Back</Link>
            </div>
        );
    }
}
ContactDetails.propTypes = {
    contact: propTypes.listContact.isRequired
};