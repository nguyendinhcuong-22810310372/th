import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Number = ({ navigation }) => {
  return (
    <View style={styles.numberContainer}>
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.btnBackText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.mobileNumberText}>Enter your phone number</Text>
      <Text style={styles.mobileNumberLabel}>Mobile Number</Text>
      <View style={styles.phoneInputContainer}>
        <Image
          source={require('../assets/phone_icon.png')}
          style={styles.phoneIcon}
        />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Phone number"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('verification')}>
        <Text style={styles.btnNextText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    padding: 20,
  },
  btnBack: {
    marginBottom: 20,
  },
  btnBackText: {
    paddingTop: 30,
    marginBottom: 20,
    fontSize: 24,
    color: '#000',
  },
  mobileNumberText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 29,
    color: '#181725',
    marginBottom: 20,
  },
  mobileNumberLabel: {
    fontFamily: 'Gilroy',
    fontSize: 18,
    lineHeight: 21,
    color: '#181725',
    marginBottom: 30,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    paddingBottom: 5,
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
  phoneNumberInput: {
    flex: 1,
    fontSize: 18,
  },
  btnNext: {
    marginTop: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#5eb078',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNextText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Number;