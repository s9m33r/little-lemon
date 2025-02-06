import { Text, Image, StyleSheet, TextInput, Pressable, Alert } from 'react-native'

export default function NewsletterScreen(navigate) {
    return (
        <>
            <Image source={require('./img/Little Lemon Logo.png')} style={styles.mainLogo}/>
            <Text style={styles.headerText}>Subscribe to our newsletter for our latest delicious recipes</Text>
            <TextInput style={styles.inputBox} placeholder='Type your email' />
            <Pressable style={styles.button} onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}><Text style={styles.buttonText}>Subscribe</Text></Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    'button': {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
    'inputBox': {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#ccc',
        backgroundColor: '#f8f8f8',
    },
    'headerText': {
        fontSize: 24,
        textAlign: 'center',
    },
    'mainLogo': {
        width: 200,
        height: 200,
        margin: 50,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
});