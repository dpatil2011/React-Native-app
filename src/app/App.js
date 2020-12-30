/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ApplyLeaveScreen from './../app/apply-leave/apply-leave-screen';
import HomeScreen from './../app/home/home-screen';
import ApplyForm from './../app/form/apply-form-screen';
import appReducers from './../common/store/reducer';

const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(appReducers)}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#2e2c83',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontFamily: 'Avenir-Heavy',
                  fontSize: 18,
                  fontWeight: 'normal',
                },
              }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="ApplyLeave"
              options={{
                title: 'Apply',
                headerStyle: {
                  backgroundColor: '#2e2c83',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontFamily: 'Avenir-Heavy',
                  fontSize: 18,
                  fontWeight: 'normal',
                },
              }}
              component={ApplyLeaveScreen}
            />
            <Stack.Screen
              name="ApplyForm"
              options={{
                title: 'Apply Form',
                headerStyle: {
                  backgroundColor: '#2e2c83',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontFamily: 'Avenir-Heavy',
                  fontSize: 18,
                  fontWeight: 'normal',
                },
              }}
              component={ApplyForm}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
