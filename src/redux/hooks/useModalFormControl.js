import { useEffect } from 'react';
import {
  useGetContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contactsApi';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

export const useModalFormControl = (onClose, id) => {
  const { data } = useGetContactsQuery();
  const contact = data.find(item => item.id === id);
  const [updateContact, { isLoading, isSuccess, isError }] =
    useUpdateContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact updated');
    }
    if (isError) {
      toast.error('Sorry, try again');
    }
  }, [isSuccess, isError]);

  const onSubmit = async fields => {
    try {
      await updateContact({ id: contact.id, ...fields });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return { register, handleSubmit, errors, onSubmit, contact, isLoading };
};
