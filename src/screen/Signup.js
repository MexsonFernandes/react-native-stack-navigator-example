import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';

export default class SignupScreen extends React.Component {
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

  signup = (email, pass) => {
    Toast.show('Signing you in...');
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>We are happy to assist you!</Text>
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
          onPress={() => this.signup(this.state.email, this.state.password)}>
          <Text style={styles.submitButtonText}> Sign up </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.spaceBelow}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text> Already have an account, log me in </Text>
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
