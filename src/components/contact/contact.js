import React from 'react';
import {Button, Container, TextField, Checkbox, FormControlLabel, Typography} from '@material-ui/core';
import SectionTitle from '../section-title/section-title';
import '../../styles/contact.scss';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import emailJs from 'emailjs-com';

function Contact() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    ccSender: false,
    formSubmitted: false,
  });

  const changeValue = (value, type) => {
    setState({...state, [type]: value});
  };

  const resetForm = () => {
    setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      ccSender: false,
      formSubmitted: true,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const {name, email, subject, message} = state;
    
    let params = {
      from_name: name,
      from_email: email,
      to_email: process.env.REACT_APP_EMAIL,
      subject: subject,
      message: message,
    }

    if (state.ccSender) params['cc_sender'] = email;

    emailJs.send(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      params,
      process.env.REACT_APP_EMAIL_JS_USER_ID,
    );

    resetForm();
  };

  const formFields = [
    {field: 'name', type: 'text', label: 'Name'},
    {field: 'email', type: 'email', label: 'Email'},
    {field: 'subject', type: 'text', label: 'Subject'},
    {field: 'message', type: 'text', label: 'Message', multiline: true, rows: '10'},
  ];

  return (
    <Container id="contact" maxWidth="md" className="contact-container">
      <SectionTitle title="Contact" />
      {
        state.formSubmitted ?
        (
          <Typography className="text-icon" variant="subtitle1">
            Email sent
            <DoneAllIcon />
          </Typography>
        ) :
        <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
          {formFields.map(element => {
            return (
              <TextField
                key={element.field}
                className="contact-input"
                type={element.type}
                variant="outlined"
                label={element.label}
                fullWidth={true}
                required={true}
                value={state[element.field]}
                multiline={element.multiline}
                rows={element.multiline ? element.rows : undefined}
                onChange={(e) => changeValue(e.target.value, element.field)} 
              />
            )
          })}
          <FormControlLabel
            className="contact-input"
            control= {
              <Checkbox
                value={state.ccSender}
                checked={state.ccSender}
                onChange={(e) => changeValue(e.target.checked, 'ccSender')} 
              />
            }
            label="Send me a copy"
          />
          <Button className="submit-button"  type="submit" variant="contained">Submit</Button>
        </form>
      }
    </Container>
  );
}

export default Contact;
