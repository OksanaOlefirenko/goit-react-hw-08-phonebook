import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import { authOperations } from 'redux/auth';
import { Container, Form, Text, Error } from './AuthorizationForm.styled';
import { Button, TextField } from '@mui/material';

export const AuthorizationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getUserError);
  const location = useLocation().pathname;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (location === '/register') {
      if (name === '' || email === '' || password === '') return;
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }

    if (location === '/login') {
      if (email === '' || password === '') return;
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    }
  };

  const textFieldSX = {
    '& .MuiOutlinedInput-root': {
      '& > fieldset': {
        m: 1,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.9)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.9)',
      },
    },
  };

  const buttonSX = {
    fontSize: 17,
    fontWeight: 700,
    borderWidth: 2,
    marginTop: 5,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(255, 255, 255, 0.9)',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.9)',
      color: 'rgba(255, 255, 255, 0.9)',
      borderWidth: 2,
    },
  };

  return (
    <Container>
      <Text>
        {location === '/login'
          ? "Let's login to start"
          : "Let's create your account"}
      </Text>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {location === '/register' && (
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name Surname"
            required
            sx={textFieldSX}
            inputProps={{
              style: {
                fontSize: 15,
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.9)',
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 20,
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          />
        )}
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          required
          sx={textFieldSX}
          inputProps={{
            style: {
              fontSize: 15,
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.9)',
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: 20,
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.5)',
            },
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="at least 8 chars, numbers and letters"
          required
          sx={textFieldSX}
          inputProps={{
            style: {
              fontSize: 15,
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.9)',
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: 20,
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.5)',
            },
          }}
        />

        <Button type="submit" variant="outlined" sx={buttonSX}>
          {location === '/login' ? 'Login' : 'Register'}
        </Button>
        {error && <Error>{error}</Error>}
      </Form>
    </Container>
  );
};
