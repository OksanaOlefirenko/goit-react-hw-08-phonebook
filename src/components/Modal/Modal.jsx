import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox, CloseBtn } from './Modal.styled';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

// import toast from 'react-hot-toast';
// import { useForm } from 'react-hook-form';
import { Form } from 'components/Form';
import { useModalFormControl } from 'redux/hooks/useModalFormControl';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, id }) => {
  const { register, handleSubmit, errors, onSubmit, contact, isLoading } =
    useModalFormControl(onClose, id);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBox>
        <Form
          btnText="Save changes"
          onSubmit={onSubmit}
          contact={contact}
          isLoading={isLoading}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
        <CloseBtn type="button" onClick={() => onClose()}>
          <CloseIcon />
        </CloseBtn>
      </ModalBox>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.string,
};
