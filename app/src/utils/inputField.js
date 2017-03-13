import React from 'react';
import { Field } from 'redux-form';

export default class InputField extends React.Component {

  renderInput = field => (
    <div>
      <input
        {...field.input}
        type={this.props.type}
      />
      {field.meta.touched &&
       field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>
  );

  render() {
    return (
      <Field
        {...this.props}
        component={this.renderInput}
      />
    );
  }
}
