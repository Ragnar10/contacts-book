import PropTypes from 'prop-types';

const listContact = PropTypes.shape({
    id: PropTypes.number.isRequired,
    age: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
});

const listContacts = PropTypes.arrayOf(listContact);

export default {
  ...PropTypes,
  listContact,
  listContacts
};
