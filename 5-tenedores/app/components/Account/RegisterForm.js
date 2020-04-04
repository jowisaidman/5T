import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import { validateEmail } from '../../utils/Validation';
import * as firebase from 'firebase';

export default function RegisterForm() {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideRepeatPassword, setHideRepeatPassword] = useState(true);
    //En este caso son pocos datos, solo 3 campos entonce uso 3 estados, sino se podria hacer un estado dinamico 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");


    const register = async () => {
        if (!email || !password || !repeatPassword) {
            console.log('completa todo');
        } else if (!validateEmail(email)) {
            console.log('Email invalivo');
        } else if (password !== repeatPassword) {
            console.log('las pass no coinciden');
        } else {
            await firebase.auth().createUserWithEmailAndPassword(email,password).
            then(() => {
                console.log('usuario creado');
            })
            .catch(() => {
                console.log('Error');
            })
        }
    }


    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo Electronico'
                containerStyle={styles.inputForm}
                onChange={e => setEmail(e.nativeEvent.text)}
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
                secureTextEntry={hidePassword}
                containerStyle={styles.inputForm}
                onChange={e => setPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon 
                    type='material-community'
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                    iconStyle={styles.iconRight}
                    onPress={() => setHidePassword(!hidePassword)}
                />
                }
            />
            <Input 
                placeholder='Confirmar contraseña'
                password={true}
                secureTextEntry={hideRepeatPassword}
                containerStyle={styles.inputForm}
                onChange={e =>setRepeatPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon 
                    type='material-community'
                    name={hideRepeatPassword ? 'eye-outline' : 'eye-off-outline'}
                    iconStyle={styles.iconRight}
                    onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
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