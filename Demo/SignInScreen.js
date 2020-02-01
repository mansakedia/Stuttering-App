import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
 
export default class SignInScreen extends React.Component {
    static navigationOptions = {
		title: 'Sign In',
	};
  //Home Screen to show in Home Option
  constructor(props) {
        super(props);
        this.state = {text: '', textToProcess: ''};
      }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title = "Sign In With Google"
          onPress = {() => this.props.navigation.navigate('VerifyID')}
          />
        </View>
    );
  }
}