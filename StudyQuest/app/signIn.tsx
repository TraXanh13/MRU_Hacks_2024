import {Text, View, StyleSheet} from 'react-native';

export default function SignInScreen() {
    return (
        <View style={signInStyle.container}>
            <Text style={signInStyle.text}>This is a test</Text>
        </View>
    )
}

const signInStyle = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontFamily: 'Pixel-Game',
        fontSize: '8rem',
    },
});

