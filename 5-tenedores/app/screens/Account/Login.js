import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import LoginForm from '../../components/Account/LoginForm';

export default function Login(props) {
    const { navigation } = props;
    return(
        <ScrollView>
            <Image
                source={require('../../../assets/img/logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <View style={styles.viewContainer}>
                <LoginForm />
                <CreateAccount navigation={navigation}/>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <Text>Login Facebook...</Text>
            </View>
        </ScrollView>
    );
}

//Creacion de componente interno - no me funciono bien pasar las props como parametro
function CreateAccount(props) {
    const { navigation } = props;

    return (
        <Text style={styles.textRegister}>
            ¿Aun no tienes cuenta? {' '}
            <Text 
                style={styles.btnRegister}
                onPress={() => navigation.navigate('Register')} 
            >
                Registrate
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        width:'100%',
        height: 150,
        marginTop: 150
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color:'#00a680',
        fontWeight: 'bold'
    },  
    divider: {
        backgroundColor: '#00a680',
        margin: 40
    }
})