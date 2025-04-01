import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FirstScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.firstContainer}>
      <Image
        source={require('../assets/icon_nectar.png')}
        style={styles.firstImg}
      />
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate('Onboarding')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: '#5eb078',
  },
  firstImg: {
    width: 267.4,
    height: 68.6,
    marginTop: 413.7,
    marginLeft: 73.3,
  },
  startButton: {
    width: '100%',
    height: '100%'
  },
});

export default FirstScreen;