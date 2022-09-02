import { useForm } from 'react-hook-form';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const useAddContact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    mode: 'onBlur',
  });
  const [createContact, { isLoading, isSuccess, isError }] =
    useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact added');
    }
    if (isError) {
      toast.error('Sorry, try again');
    }
  }, [isSuccess, isError]);

  const onSubmit = async values => {
    try {
      const contact = { name: values.name, number: values.number };
      const findName = contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (findName) {
        return toast.error(`${values.name} is already in contacts.`);
      }
      const findNumber = contacts.find(
        contact => contact.number === values.number
      );
      if (findNumber) {
        return toast.error('This phone number is already in contacts.');
      } else {
        createContact(contact);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { register, handleSubmit, errors, isLoading, onSubmit };
};
