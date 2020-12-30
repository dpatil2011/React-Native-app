import {Container} from 'native-base';
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './../../../assets/styles/default.style';

class HomeComponent extends Component {
  render() {
    return (
      <ScrollView>
        <Container style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.onPress('About')}>
            <Text style={styles.applyBttonText}>Apply Leave</Text>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    );
  }
}
export default HomeComponent;
