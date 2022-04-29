import PropTypes from 'prop-types';

const ContactItem = ({name, phone}) => (
    <span> {name}: {phone}</span>
)

ContactItem.propTypes = {
    name: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired,
}


export default ContactItem;