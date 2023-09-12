import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledForm, StyledLabel } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (name === '') {
      e.currentTarget.reset();
      return;
    }

    this.props.updateContact(name, number);
    e.currentTarget.reset();
  };

  onFormInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value.trim(),
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledLabel htmlFor="name">Name</StyledLabel>

        <input
          type="text"
          name="name"
          id="name"
          pattern="^[\p{L}' ]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onFormInput}
        />
        <StyledLabel htmlFor="number">Number</StyledLabel>
        <input
          type="tel"
          name="number"
          id="number"
          pattern="^\+380\d{9}$"
          title="Phone number starts with +380"
          required
          onChange={this.onFormInput}
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  updateContact: PropTypes.func.isRequired,
};

export default ContactForm;
