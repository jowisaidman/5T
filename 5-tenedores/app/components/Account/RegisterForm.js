import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';

export default function RegisterForm() {

    const register = () => {
        console.log('usuario registrado')
    }


    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo Electronico'
                containerStyle={styles.inputForm}
                onChange={() => console.log('Email actualizado')}
                rightIcon={
                    <Icon 
                        type='material-community'
                        name='at'
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input 
                placeholder='Contraseña'
                password={true}
                secureTextEntry={true}
                containerStyle={styles.inputForm}
                onChange={() => console.log('contraseña actualziada')}
                rightIcon={
                    <Icon 
                    type='material-community'
                    name='eye-outline'
                    iconStyle={styles.iconRight}
                />
                }
            />
            <Input 
                placeholder='Confirmar contraseña'
                password={true}
                secureTextEntry={true}
                containerStyle={styles.inputForm}
                onChange={() => console.log('repetir contraseña actualziada')}
                rightIcon={
                    <Icon 
                    type='material-community'
                    name='eye-outline'
                    iconStyle={styles.iconRight}
                />
                }
            />
            <Button
                title='Registrarse'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={register}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    inputForm: {
        width: '100%',
        marginTop: 20
    },
    iconRight: {
        color: '#c1c1c1'
    },
    btnContainerRegister: {
        marginTop: 20,
        width: '95%'
    },
    btnRegister: {
        backgroundColor:'#00a680'
    }
})