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

import ApplyLeaveComponent from './../../module/apply-leave/component/apply-leave-component';

class ApplyLeaveScreen extends Component {
  onPress = () => {
    this.props.navigation.navigate('Home');
  };
  required = (value) => (value ? undefined : 'errorMessage.required');

  render() {
    return (
      <ApplyLeaveComponent
        formId="apply-leave"
        required={this.required}
        onPress={this.onPress}
        data={this.props.leave.data}
        formError={this.props.formSyncErrors}
        formMeta={this.props.formMeta}
      />
    );
  }
}
const mapStateToProps = (state) => {
  const {leave} = state;
  return {
    leave,
    formSyncErrors: getFormSyncErrors('apply-leave')(state),
    formMeta: getFormMeta('apply-leave')(state),
  };
};

const mapActionToProps = () => ({});
// export default reduxForm({
//   form: 'apply-leave',
// })(ApplyLeaveScreen);
export default connect(mapStateToProps, mapActionToProps)(ApplyLeaveScreen);
