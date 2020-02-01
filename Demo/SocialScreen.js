import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet , FlatList} from 'react-native';
 
export default class SocialScreen extends React.Component {
  //Setting Screen to show in Setting Option
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
            {key: 'Mike: I completed 50% of my assigned tasks!'},
            {key: 'Adam: I completed 75% of my assigned tasks!'},
            {key: 'Taylor: I completed 100% of my assigned tasks!'},
            {key: 'Emily: I completed 50% of my assigned tasks!'},
            {key: 'John: I completed 80% of my assigned tasks!'},
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