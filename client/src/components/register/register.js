import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styleAll.css'

class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    lastname: '',
  };
  submitForm = (e) => {};
  render() {
    return (
      <div className='loginForm'>
        <form onSubmit={this.submitForm}>
          <div className = "LogInTag">Enter The Details</div>
          <div className='formElements'>
            <input
              className='input'
              type='name'
              placeholder='Enter Your FirstName'
              onChange={this.nameChanged}
              value={this.state.name}
            />
          </div>
          <div className='formElements'>
            <input
              className='input'
              type='lastname'
              placeholder='Enter Your LastName'
              onChange={this.lastNameChanged}
              value={this.state.lastname}
            />
          </div>
          <div className='formElements'>
            <input
              className='input'
              type='email'
              placeholder='Enter Your Email'
              onChange={this.emailChanged}
              value={this.state.email}
            />
          </div>

          <div className='formElements'>
            <input
              className='input'
              type='password'
              placeholder='Enter Your password'
              onChange={this.passwordChanged}
              value={this.state.password}
            />
          </div>
          <button className='butt' type='submit'>
            Register
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Register);
