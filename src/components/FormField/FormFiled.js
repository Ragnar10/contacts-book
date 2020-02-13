import React, {Component} from 'react';
import propTypes from "../propTypes/propTypes";
import {Link} from "react-router-dom";
import './FormFiled.css';

export default class FormFiled extends Component {

    onInputChange = (e) => {
        this.props.onChange({
            [e.target.name]: e.target.value
        });
    };

    onSubmitForm = (e) => {
        const {contact} = this.props;
        if(!contact.name || !contact.surname || !contact.age || !contact.phone) {
            e.stopPropagation();
            e.preventDefault();
            return;
        }
        this.props.onSubmit(contact);
    };

    render() {
        const {changeButton, contact: {name, surname, age, phone}} = this.props;
        return (
            <form className='form-field'>
                <div className='input-wrap'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' value={name} name='name' maxLength='20' onChange={this.onInputChange}/>
                </div>
                <div className='input-wrap'>
                    <label htmlFor='surname'>Surname:</label>
                    <input type='text' value={surname} name='surname' maxLength='20' onChange={this.onInputChange}/>
                </div>
                <div className='input-wrap'>
                    <label htmlFor='age'>Age:</label>
                    <input type='text' value={age} name='age' maxLength='20' onChange={this.onInputChange}/>
                </div>
                <div className='input-wrap'>
                    <label htmlFor='phone'>Phone:</label>
                    <input type='text' value={phone} name='phone' maxLength='20' onChange={this.onInputChange}/>
                </div>
                <Link to='/'>
                    <button type='submit' className='add-btn' onClick={this.onSubmitForm}>{changeButton}</button>
                </Link>
            </form>
        );
    }
}

FormFiled.propTypes = {
    contact: propTypes.listContact.isRequired
};

FormFiled.defaultProps = {
    changeButton: 'Add'
};