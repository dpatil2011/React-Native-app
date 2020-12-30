import { View } from 'native-base';
import React, { Component } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Field, Form, reduxForm } from 'redux-form';

class ApplyFormComponent extends Component {
  render() {
    const {handleSubmit, required, onSubmit, formValue} = this.props;
    // const onSubmit = (values) => console.log(values);
    // const required = value => (value ? undefined : 'Required')

    const renderInput = ({
      meta: {touched, error, warning},
      input: {onChange, ...input},
      ...rest
    }) => {
      return (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            defaultValue={formValue.email}
            {...input}
            {...rest}
          />
          {touched &&
            ((error && <Text>{error}</Text>) ||
              (warning && <Text>{warning}</Text>))}
        </View>
      );
    };
    return (
      <View style={styles.root}>
        <Text>{formValue.email}</Text>
      
          <Field
            name="email"
            type="text"
            placeholder="Email"
            showError={true}
            value={formValue.email}
          //  onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          //  defaultValue={formValue.email}
            validate={[required]}
            props={{
              value: formValue.email,
            }}
            component={renderInput}>
          </Field>
          <Field
            name={'password'}
            value={formValue.password}
            props={{
              placeholder: 'Password',
              secureTextEntry: true,
              keyboardType: 'numeric',
            }}
            component={renderInput}
          />
          <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
       
      </View>
    
     
     
    
    );
  }
}

//export default ApplyFormComponent;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
  },
});
export default reduxForm({
  form: 'form-id', // a unique identifier for this form
})(ApplyFormComponent);
