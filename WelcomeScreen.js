import * as React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Image, View, useColorScheme, Pressable } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme()

  const [firstName, onChangeFirstName] = React.useState('');

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]} keyboardDismissMode='on-drag'>
      <View style={styles.headerWrapper}>
        <Image style={styles.image} source={require('./img/Little Lemon Logo.png')} />
        <Text
          style={[
            styles.headerText,
            colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>Little Lemon</Text>
      </View>
      <Text
        style={[
          styles.regularText,
          colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput style={styles.inputBox} value={firstName} onChangeText={onChangeFirstName} placeholder={'First Name'} />
      <Pressable onPress={() => navigation.navigate('Newsletter')}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
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
  buttonText: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
