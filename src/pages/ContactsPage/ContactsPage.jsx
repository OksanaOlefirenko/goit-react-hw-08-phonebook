import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const ContactsPage = () => {
  const { data } = useGetContactsQuery();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {data && (data.length > 1 ? <Filter /> : '')}
      <ContactList />
    </div>
  );
};
