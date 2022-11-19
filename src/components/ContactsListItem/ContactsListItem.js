import styles from './ContactsListItem.module.css';
import propTypes from 'prop-types';

import { useDelContactMutation } from 'redux/contacts-slice';

const ContactListItem = ({ name, phone, id }) => {
  const [delContact, { isLoading: isUpdating }] = useDelContactMutation();

  return (
    <li className={styles.li}>
      <span>
        {name}: {phone}
      </span>
      <button
        className={styles.btnDel}
        type="button"
        onClick={() => delContact(id)}
      >
        {isUpdating ? 'isDeliting...' : 'Delete'}
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
};

export default ContactListItem;
