import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import Toast from 'react-native-simple-toast';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    Toast.show('home screen');
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.name}>Welcome User</Text>
          <View style={styles.button}>
            <View style={styles.reward}>
              <Button
                title="go login screen"
                color="green"
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </View>
            <View style={styles.business}>
              <Button
                title="go sign up screen"
                color="green"
                onPress={() => this.props.navigation.navigate('Signup')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 130,
  },
  reward: {
    marginVertical: 20,
    width: 200,
  },
  business: {
    marginVertical: 20,
    width: 200,
  },
  govt: {
    marginVertical: 20,
    width: 200,
  },
  name: {
    fontSize: 30,
    justifyContent: 'center',
  },
});
