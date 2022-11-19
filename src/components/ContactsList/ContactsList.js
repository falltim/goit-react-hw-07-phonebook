import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts-selectors';
import { useFetchContactsQuery } from 'redux/contacts-slice';
import ContactsListItem from '../ContactsListItem';

const ContactsList = () => {
  const { data } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  if (data) {
    const filteredContacts = data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactsListItem key={id} id={id} name={name} phone={phone} />
          );
        })}
      </ul>
    );
  }
};

export default ContactsList;
