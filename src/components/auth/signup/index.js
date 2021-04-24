import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../../../actions'
// import auth from '../../../reducers/auth'

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field
            autoComplete="off"
            name="email"
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="Password">Password</label>
          <Field
            autoComplete="off"
            name="password"
            type="password"
            component="input"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { errorMessage: auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup)
