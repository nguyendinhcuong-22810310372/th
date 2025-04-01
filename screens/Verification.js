import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Verification = ({ navigation }) => {
  return (
    <View style={styles.numberContainer}>
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('number')}>
        <Text style={styles.btnBackText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.verificationText}>Enter your 4-digit code</Text>
      <Text style={styles.codeLabel}>Code</Text>
      <TextInput
        style={styles.codeInput}
        placeholder="Enter code"
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('nextScreen')}>
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
  verificationText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 29,
    color: '#181725',
    marginBottom: 10,
  },
  codeLabel: {
    fontFamily: 'Gilroy',
    fontSize: 18,
    lineHeight: 21,
    color: '#181725',
    marginTop: 10,
    marginBottom: 30,
  },
  codeInput: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    paddingBottom: 5,
    marginBottom: 5,
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

export default Verification;