import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import '../../styleAll.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    success: false,
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.User.user.isAuth) {
      this.props.history.push('/User');
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(userLogin(this.state));
  };
  render() {
    const u = this.props.User;
    return (
      <div className='loginForm'>
        <form onSubmit={this.submitForm}>
          <div className='LogInTag'>Log in here</div>
          <div className='formElements'>
            <input
              className='input'
              type='email'
              placeholder='enter your email'
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className='formElements'>
            <input
              className='input'
              type='password'
              placeholder='enter your password'
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button className='butt' type='submit'>
            LogIn
          </button>
          <div className = "error"> {u.user ? <div className = "errorMessage">{u.user.message}</div> : null}</div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    User: state.user,
  };
};
export default connect(mapStateToProps)(Login);
