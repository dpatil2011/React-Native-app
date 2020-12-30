import React, {Component} from 'react';
import HomeComponent from './../../module/home/home-component';

class Home extends Component {
  onPress = () => {
    this.props.navigation.navigate('ApplyForm');
  };
  render() {
    return <HomeComponent onPress={this.onPress} />;
  }
}
export default Home;
