import Moment from 'moment';
import {Container, View} from 'native-base';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {ScrollView, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import DatePicker from 'react-native-datepicker';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import dateIcon from './../../../../assets/img/dateIcon.png';
import styles from './../../../../assets/styles/default.style';

class ApplyLeaveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: '',
      value: '',
    };
  }

  render() {
    const {formId, required, formError, formMeta, onSubmit} = this.props;
    const onChangeText = (text) => {
      this.setState({
        value: text,
      });
    };
    return (
      <Container style={styles.container}>
        <ScrollView>
          <Calendar
            markedDates={{
              [this.state.toDate]: {
                selected: true,
                marked: true,
              },
              [this.state.fromDate]: {
                selected: true,
                marked: true,
                selectedColor: 'blue',
              },
            }}
            theme={{
              calendarBackground: '#ebedf6',
              monthTextColor: '#ffffff',
              arrowColor: '#ffffff',
              disabledArrowColor: '#ffffff',
              indicatorColor: '#ffffff',
              textMonthFontSize: 16,
              textMonthFontWeight: 'bold',
              'stylesheet.calendar.header': {
                dayHeader: styles.dayHeader,
                week: styles.weekStyle,
                header: styles.calendarHeader,
                headerContainer: styles.flexRow,
                arrow: styles.arrow,
              },
            }}
            dayComponent={({date, state}) => {
              return (
                <View
                  style={
                    Moment(date.dateString).format('YYYY-MM-DD') ==
                      Moment(this.state.fromDate).format('YYYY-MM-DD') ||
                    Moment(date.dateString).format('YYYY-MM-DD') ==
                      Moment(this.state.toDate).format('YYYY-MM-DD') ||
                    (new Date(date.dateString) >=
                      new Date(this.state.fromDate) &&
                      new Date(date.dateString) <= new Date(this.state.toDate))
                      ? styles.box1
                      : styles.box
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: state === 'disabled' ? 'gray' : 'black',
                    }}>
                    {date.day}
                  </Text>
                </View>
              );
            }}
          />
          <DatePicker
            style={styles.batePicker}
            date={this.state.fromDate}
            mode="date"
            placeholder="select date"
            iconSource={dateIcon}
            iconPosition="right"
            format="YYYY-MM-DD"
            customStyles={{
              dateIcon: [styles.smallIcon],
              dateInput: [styles.dateInput],
              dateText: styles.dateTextStyle,
            }}
            onDateChange={(date) => {
              this.setState({fromDate: date});
            }}
          />
          <DatePicker
            style={styles.toDatePicker}
            date={this.state.toDate}
            mode="date"
            placeholder="select date"
            iconSource={dateIcon}
            iconPosition="right"
            format="YYYY-MM-DD"
            customStyles={{
              dateIcon: [styles.smallIcon],
              dateInput: [styles.dateInput],
              dateText: styles.dateTextStyle,
            }}
            onDateChange={(date) => {
              this.setState({
                toDate: date,
              });
            }}
          />
          <TextInput
            style={styles.textInput}
            numberOfLines={4}
            multiline={true}
            placeholder="Reason for Leave…."
            onChangeText={(text) => onChangeText(text)}
            value={this.state.value}
          />
          <TouchableOpacity
            style={[styles.button, styles.marginVertical20]}
            onPress={() => this.props.onPress('About')}>
            <Text style={styles.applyBttonText}>Apply</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }
}
export default ApplyLeaveComponent;
