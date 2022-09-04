import {
  Item,
  AvatarIcon,
  ButtonDel,
  ButtonEdit,
  ContactsInfo,
  Contact,
} from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { MdDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

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
        <ContactsInfo>
          <AvatarIcon>{name.charAt(0).toUpperCase()}</AvatarIcon>
          <Contact>
            {name}: {number}
          </Contact>
        </ContactsInfo>
        <div>
          <ButtonDel type="button" onClick={() => deleteContact(id)}>
            <MdDeleteForever size={20} />
            {isDeleting && <Loader />}
          </ButtonDel>
          <ButtonEdit type="button" onClick={showModal}>
            <FiEdit size={20} />
          </ButtonEdit>
        </div>
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
