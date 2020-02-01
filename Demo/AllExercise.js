import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
//import all the basic component we have used
 
export default class AllExercise extends React.Component {
  //Home Screen to show in Home Option
  _onPressButton() {
    alert('You tapped the button!')
  }
  render() {
    return (
        // <TouchableOpacity onPress={this._onPressButton}>
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Details!</Text>
    //   </View>
      /* </TouchableOpacity> */
    <View style={styles.container}> 
        <TouchableOpacity onPress={this._onPressButton}>
        <FlatList
          data={[
            {key: 'Speech Exercise 1'},
            {key: 'Speech Exercise 2'},
            {key: 'Speech Exercise 3'},
            {key: 'Speech Exercise 4'},
            {key: 'Speech Exercise 5'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </TouchableOpacity>
    </View>
       
    );
  }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });