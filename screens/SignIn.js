import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.SignInContainer}>
      <Image
        source={require('../assets/bg_signin.png')}
        style={styles.signinimg}
      />
      <Text style={styles.title}>
        Get your groceries 
      </Text>
      <Text style={styles.title1}>
        with nectar
      </Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/phone_icon.png')}
          style={styles.phoneIcon}
        />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          onFocus={() => navigation.navigate('number')}
        />
      </View>
      <Text style={styles.socialMediaText}>Or connect with social media</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('number')}>
          <Text style={styles.ggbtnText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton} onPress={() => navigation.navigate('number')}>
          <Text style={styles.fbbtnText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SignInContainer: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    position: 'relative'
  },
  signinimg: {
    width: 413,
    height: 374,
    backgroundColor: '#fcfcfc',
  },
  title: {
    marginTop: 400,
    marginLeft: 25,
    fontFamily: 'Gilroy',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 29,
    color: '#030303',
    position: 'absolute'
  },
  title1: {
    marginTop: 430,
    marginLeft: 25,
    fontFamily: 'Gilroy',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 29,
    color: '#030303',
    position: 'absolute'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 490,
    marginLeft: 25,
    position: 'absolute',
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  phoneIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    width: 330,
    height: 39.550201416015625,
  },
  socialMediaText: {
    fontSize: 16,
    color: '#888',
    position: 'absolute',
    width: 220,
    height: 17,
    marginTop: 565,
    marginLeft: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30
  },
  googleButton: {
    width: 364,
    height: 67,
    backgroundColor: '#5683e8',
    position: 'absolute',
  },
  ggbtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    paddingTop: 20,
  },
  facebookButton: {
    width: 364,
    height: 67,
    backgroundColor: '#4b66a9',
    marginTop: 150
  },
  fbbtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    paddingTop: 20,
  },
});

export default SignIn;