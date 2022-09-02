import { Form } from 'components/Form';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { useAddContact } from 'redux/hooks/useAddContact';
import { Container } from './ContactsPage.styled';

const ContactsPage = () => {
  const { data } = useGetContactsQuery();
  const { register, handleSubmit, errors, isLoading, onSubmit } =
    useAddContact();
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form
        btnText="Add contact"
        onSubmit={onSubmit}
        isLoading={isLoading}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {data && (data.length > 1 ? <Filter /> : '')}
      <h2>Contacts</h2>
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
