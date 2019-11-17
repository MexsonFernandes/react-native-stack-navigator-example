import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };

  handlePassword = text => {
    this.setState({password: text});
  };

  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Thanks for getting back here!</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter your email address"
          placeholderTextColor="#29f4a6"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter your password"
          placeholderTextColor="#29f4a6"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={styles.submitButtonText}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.spaceBelow}
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text> Create an account </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spaceBelow: {
    paddingBottom: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#29f4a6',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#29f4a6',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
