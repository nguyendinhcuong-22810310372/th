import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.onboardingContainer}>
      <Image
        source={require('../assets/background_onbording.png')}
        style={styles.backgroundOnboarding}
      />
      <Image
        source={require('../assets/icon_carrot.png')}
        style={styles.onboardingImg}
      />
      <View style={styles.textBording}>
        <Text style={styles.text1Bording}>
          Welcome to our store
        </Text>
        <Text style={styles.text2Bording}>
          Get your groceries in as fast as one hour
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonBording} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.textbtnBording}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
  },
  backgroundOnboarding: {
    position: 'relative',
    width: '101%',
    height: '100%',
  },
  onboardingImg: {
    width: 48.5,
    height: 56.4,
    marginTop: 470,
    marginLeft: 182.8,
    position: 'absolute',
  },
  textBording: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 200,
    left: 0,
    right: 0,
  },
  text1Bording: {
    width: 253,
    height: 86,
    color: 'white',
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 48,
    lineHeight: 42,
    textAlign: 'center',
  },
  text2Bording: {
    width: 295,
    height: 15,
    marginTop: 5,
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    lineHeight: 15,
    color: 'rgba(252, 252, 252, 0.34)',
    textAlign: 'center',
  },
  buttonBording: {
    position: 'absolute',
    backgroundColor: '#5eb078',
    width: 353,
    height: 67,
    bottom: 100,
    left: 30.5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtnBording: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default Onboarding;