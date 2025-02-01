import * as React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Image, View } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = React.useState('');

  return (
    <ScrollView indicatorStyle="white" style={styles.container} keyboardDismissMode='on-drag'>
      <View style={styles.headerWrapper}>
        <Image style={styles.image} source={require('./img/Little Lemon Logo.png')} />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput style={styles.inputBox} value={firstName} onChangeText={onChangeFirstName} placeholder={'First Name'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
