import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

export default function LoginForm() {
    const [hidePassword, setHidePassword] = useState(true);
    
    const Login = () => {

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
                placeholder=' Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={hidePassword}
                onChange={() => console.log('Contraseña actualizada')}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                        iconStyle={styles.iconRight}
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                }
            />
            <Button 
                title='Iniciar Sesion'
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={Login}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    inputForm: {
        width:'100%',
        marginTop:20,
    },
    iconRight: {
        color: '#c1c1c1',
    },
    btnContainerLogin: {
        marginTop: 20,
        width: '95%',
    },
    btnLogin: {
        backgroundColor:'#00a680',
    }
})