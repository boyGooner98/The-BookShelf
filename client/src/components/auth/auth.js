import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuth } from '../../redux/actions';
import '../../styleAll.css'

export default function (ComposedClass, reload) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
    };

    componentWillMount() {
      this.props.dispatch(isAuth());
    }
      componentWillReceiveProps(nextProps) {
      this.setState({
        loading: false,
      });
          if (!nextProps.user.canAcess.isAuth) {
              if (reload) {
                  this.props.history.push('/login')
              }
          }
          else {
              if (reload === false) {
                  this.props.history.push('/profiles')
              }
          }
    }

      render() {
        console.log(this.props)
      if (this.state.loading) {
        return <div className='loader'> </div>;
      }
      return <ComposedClass {...this.props} user='' />;
    }
  }
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  return connect(mapStateToProps)(AuthenticationCheck);
}
