import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image source={require('../../../assets/img/logo.png')}
            style={styles.logo}
            resizeMode='contain'/>
            <View style={styles.viewForm}>
                <Text>Form register....</Text>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewForm: {
        marginRight: 40,
        marginLeft: 40
    }
})