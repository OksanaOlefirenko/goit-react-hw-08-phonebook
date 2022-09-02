import {
  Item,
  BtnDelete,
  BtnEdit,
  Delete,
  Edit,
  AvatarIcon,
} from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Modal } from 'components/Modal';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact deleted');
    }
  }, [isSuccess]);

  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Item key={id}>
        <AvatarIcon>{name.charAt(0).toUpperCase()}</AvatarIcon>
        <p>
          {name}: {number}
        </p>
        <BtnDelete
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
          variant="outlined"
          startIcon={<Delete />}
        >
          {isDeleting && <Loader />}
        </BtnDelete>
        <BtnEdit
          type="button"
          onClick={showModal}
          variant="outlined"
          startIcon={<Edit />}
        />
      </Item>
      {modalOpen && (
        <Modal onClose={showModal} isModalOpen={modalOpen} id={id} />
      )}
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
