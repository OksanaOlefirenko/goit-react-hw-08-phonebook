import PropTypes from 'prop-types';
import { Loader } from 'components/Loader';
import { FormBox, Input, Label, Error, BtnSubmit } from './Form.styled';

export const Form = ({
  btnText,
  onSubmit,
  contact,
  isLoading,
  register,
  handleSubmit,
  errors,
}) => {
  return (
    <FormBox onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Label htmlFor="name">
        Name:
        <Input
          id="name"
          type="text"
          defaultValue={contact ? contact.name : ''}
          {...register('name', {
            required: 'This is required field',
            minLength: {
              value: 3,
              message: 'Min length is 3 symbols',
            },
            pattern: {
              value:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              message:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            },
          })}
          placeholder="Surname Name"
        />
      </Label>
      {errors?.name && <Error>{errors?.name?.message || 'Error!'}</Error>}
      <Label htmlFor="number">
        Number:
        <Input
          id="number"
          type="tel"
          defaultValue={contact ? contact.number : ''}
          {...register('number', {
            required: 'This is required field',
            minLength: {
              value: 5,
              message: 'Min length is 5 symbols',
            },
            maxLength: {
              value: 20,
              message: 'Max length is 20 symbols',
            },
            pattern: {
              value:
                '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
          placeholder="+38(000)000-00-00"
        />
      </Label>
      {errors?.number && <Error>{errors?.number?.message || 'Error!'}</Error>}
      <BtnSubmit disabled={isLoading} variant="contained" type="submit">
        {isLoading && <Loader size={20} />}
        {btnText}
      </BtnSubmit>
    </FormBox>
  );
};

Form.propTypes = {
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  contact: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
