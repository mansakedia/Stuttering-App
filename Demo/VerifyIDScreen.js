import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
 
export default class VerifyIDScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', textToProcess: ''};
      }
      render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              placeholder="Access ID here"
              onChangeText={(newText) => this.setState(previousState => ({text:newText}))}
              value={this.state.text}
              keyboardType="numeric"
              style = {{fontSize:24 }}
            />
            <Text style = {{ fontSize:24 }}>
              {this.state.textToProcess}
            </Text>
            <Button
                title = "Submit"
                //onPress = {() => this.setState(previousState => ({text:previousState.text,textToProcess:previousState.text}))}
                onPress = {() => 
                  this.state.text==1234 ? this.props.navigation.navigate('Exercise') : alert('Invalid input!')}
                />
          </View>
        );
      }
}