import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {
  Field,
  reduxForm,
  change,
  getFormMeta,
  getFormSyncErrors,
} from 'redux-form';
import ApplyFormComponent from './../../module/form/component/apply-form-component';
import ApplyLeaveComponent from '../../module/apply-leave/component/apply-leave-component';

class ApplyFormScreen extends Component {
  onSubmit = (values) => {
    console.log(values);
  };
  required = (value) => (value ? undefined : 'required');

  render() {
    return (
      <ApplyFormComponent
        data={this.props.apply.data}
        formId="from-id"
        required={this.required}
        formValue={this.props.apply.formValue}
        onSubmit={this.onSubmit}
        formError={this.props.formSyncErrors}
        formMeta={this.props.formMeta}
      />
    );
  }
}
const mapStateToProps = (state) => {
  const {apply} = state;
  return {
    apply,
    formSyncErrors: getFormSyncErrors('from-id')(state),
    formMeta: getFormMeta('from-id')(state),
  };
};
const {mapActionToProps} = () => ({
  change,
});

// ApplyFormScreen = connect(mapStateToProps, mapActionToProps())(ApplyFormScreen);
// export default reduxForm({
//   form: 'form-id',
// })(ApplyFormScreen);
export default connect(mapStateToProps, mapActionToProps())(ApplyFormScreen);
