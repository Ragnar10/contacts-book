import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactsList from '../ContactsList/ContactsList';
import FormFiled from "../FormField/FormFiled";
import ContactDetails from "../ContactDetails/ContactDetails";
import './App.css';

class App extends Component {

    state = {
        list: [
            {
                id: 1,
                age: "33",
                name: "Lanne",
                surname: "Gaham",
                phone: "1770-736-8031 x56442",
            },
            {
                id: 2,
                age: "33",
                name: "Ervin",
                surname: "Howell",
                phone: "010-692-6593 x09125",
            },
            {
                id: 3,
                age: "33",
                name: "Clementine",
                surname: "Bauch",
                phone: "1-463-123-4447",
            },
            {
                id: 4,
                age: "33",
                name: "Patricia",
                surname: "Lebsack",
                phone: "493-170-9623 x156",
            },
            {
                id: 5,
                age: "33",
                name: "Chelsey",
                surname: "Dietrich",
                phone: "(254)954-1289"
            },
            {
                id: 6,
                age: "33",
                name: "Dennis",
                surname: "Schulist",
                phone: "1-477-935-8478 x6430",
            },
            {
                id: 7,
                age: "33",
                name: "Kurtis",
                surname: "Weissnat",
                phone: "210.067.6132",
            },
            {
                id: 8,
                age: "33",
                name: "Nicholas",
                surname: "Runolfsdottir V",
                phone: "586.493.6943 x140",
            },
            {
                id: 9,
                age: "33",
                name: "Glenna",
                surname: "Reichert",
                phone: "(775)976-6794 x41206",
            },
            {
                id: 10,
                age: "33",
                name: "Clementina",
                surname: "DuBuque",
                phone: "024-648-3804",
            }
        ],
        contact: {
            id: 0,
            age: "",
            name: "",
            surname: "",
            phone: ""
        },
        contactDetails: {
            id: 0,
            age: "",
            name: "",
            surname: "",
            phone: ""
        },
        changeButton: undefined,
        showList: true
    };

    onDeleteItem = (id) => {
        const {list} = this.state;
        const indexItem = list.findIndex((item) => item.id === id);
        const newList = [...list.slice(0, indexItem), ...list.slice(indexItem + 1)];
        this.setState({
            list: newList
        });
    };

    changeContact = (changes) => {
        const {contact} = this.state;
        this.setState(() => {
            return {
                contact: {
                    ...contact,
                    ...changes
                }
            };
        });
    };

    addNewContact = () => {
        this.setState( {
            changeButton: 'Add'
        });
    };

    addContact = (newContact) => {
        const {list, changeButton} = this.state;
        const oldContactIndex = list.findIndex((contact) => contact.id === newContact.id);
        const newId =  list.length > 0 ? list[list.length - 1].id : 0;
        if (oldContactIndex !== -1 && list[oldContactIndex].id === newContact.id && changeButton === 'Edit') {
            this.setState({
                list: [...list.slice(0, oldContactIndex), newContact, ...list.slice(oldContactIndex + 1)],
                contact: {
                    id: 0,
                    age: "",
                    name: "",
                    surname: "",
                    phone: ""
                }
            });
        } else {
            this.setState({
                list: [...list, {...newContact, id: newId + 1}],
                contact: {
                    id: 0,
                    age: "",
                    name: "",
                    surname: "",
                    phone: ""
                }
            });
        }
    };

    editContact = (contact) => {
        this.setState({
            contact: contact,
            changeButton: 'Edit'
        });
    };

    contactDetails = (contact) => {
        this.setState({
            contactDetails: contact
        });
    };

    render() {
        const {list, contact, contactDetails, changeButton, showList} = this.state;
        const container = (
            <div  className='container'>
                <Switch>
                    <Route path='/' render={() =>
                        <ContactsList list={list}
                                      contact={contact}
                                      onDeleteItem={this.onDeleteItem}
                                      onEditContact={this.editContact}
                                      onAddContact={this.addNewContact}
                                      onShowContact={this.contactDetails}
                        />
                    }  exact/>
                    <Route path='/form' render={() =>
                        <FormFiled contact={contact}
                                   changeButton={changeButton}
                                   onChange={this.changeContact}
                                   onSubmit={this.addContact}
                        />
                    }/>
                    <Route path='/details' render={() =>
                        <ContactDetails contact={contactDetails}/>
                    } />
                    <Route render={() => <h2>Page not found</h2>} />
                </Switch>
            </div>
        );
        const showContactList = showList ? container : null;
        const toggleText = showList ? 'Hide' : 'Show';
        return (
            <Router>
                <div className='toggleList' onClick={() => this.setState({showList: !showList})}>{toggleText} contacts</div>
                {showContactList}
            </Router>
        );
    }
}

export default App;
