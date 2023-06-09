import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {PageRegistrationSection, PageRegistrationTitle, PageRegistrationLabel, PageRegistrationInput, PageRegistrationBtn } from './PageRegistration.styled';
import authOperations from 'redux/auth/authOperations';

function PageRegistration() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <PageRegistrationSection>
      <PageRegistrationTitle>Please register</PageRegistrationTitle>
      <form onSubmit={handleSubmit}>
        <PageRegistrationLabel>
          Name
          <PageRegistrationInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Name"
            required
            value={name}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationLabel>
          Email
          <PageRegistrationInput
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationLabel>
          Password
          <PageRegistrationInput        
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationBtn type="submit">
          Submit
        </PageRegistrationBtn>
      </form>
    </PageRegistrationSection>
  );
}
export default PageRegistration;