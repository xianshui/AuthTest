import React from 'react';
import { AsyncStorage, View, ActivityIndicator, StyleSheet, Text } from 'react-native'


export default class EditProfile extends React.Component {
  componentDidMount() {
    this.authCheck();
  }

   authCheck = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>EditProfile screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})