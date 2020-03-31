import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

function UserGuest(props) {
    const { navigation } = props;
    return (
        <ScrollView style={styles.viewBody} centerContent={true}>
            <Image
                source={require('../../../assets/img/user-guest.jpg')}
                style={styles.image}
                resizeMode='contain'
            >

            </Image>
        <Text style={styles.title}>
            Consulta tu perfil de 5T
        </Text>
        <Text style={styles.description}>
            ¿Como describirias tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla. 
            Vota cual te a gustado mas y comenta tu experiencia
        </Text>
        <View style={styles.viewBtn}>
            <Button
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title='Ver tu perfil'
                onPress={() => navigation.navigate('Login')} //Va el nombre que se le dio en el stack, en este caso en el stack de AccountStack
            />
        </View>
        </ScrollView>
    );
}

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
    viewBody: {
        marginLeft:30,
        marginRight:30
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        marginBottom: 20
    },
    viewBtn: {
        flex: 1,
        alignItems: 'center'
    },
    btnStyle: {
        backgroundColor: '#00a680',
    },
    btnContainer: {
        width: '70%',
    }
})